#!/usr/bin/env node
//
// Refreshes src/_data/reviews.json from the Google Business Profile.
//
// Run locally, then commit the result. The API key stays on your machine,
// Cloudflare never needs it, and the deploy build does no network calls.
//
//   GOOGLE_PLACES_API_KEY=xxx node scripts/update-reviews.js
//   GOOGLE_PLACES_API_KEY=xxx GOOGLE_PLACE_ID=ChIJ... node scripts/update-reviews.js
//
// Prints the before/after and refuses to overwrite good data with nothing.

const fs = require("fs");
const path = require("path");

const OUT_FILE   = path.join(__dirname, "..", "src", "_data", "reviews.json");
const MAPS_URL   = "https://maps.app.goo.gl/6UhsEu6ofFcGnSWe7";
const PLACE_NAME = "VMG Business Advisory, PLLC Buffalo NY";
const FIELDS     = "rating,userRatingCount,googleMapsUri";

const API_KEY  = process.env.GOOGLE_PLACES_API_KEY || "";
const PLACE_ID = process.env.GOOGLE_PLACE_ID || "";

function die(msg) {
  console.error(`\n  ✗ ${msg}\n`);
  process.exit(1);
}

function shape(rating, count, url) {
  if (typeof rating !== "number" || typeof count !== "number" || count < 1) return null;
  // ratingText and the star-overlay width are derived in the template, so the
  // committed file stays hand-editable: rating and count are the only inputs.
  return {
    rating,
    count,
    url: url || MAPS_URL,
    updatedAt: new Date().toISOString().slice(0, 10),
    source: "places-api",
  };
}

async function fetchByPlaceId(id) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`, {
    headers: { "X-Goog-Api-Key": API_KEY, "X-Goog-FieldMask": FIELDS },
  });
  if (!res.ok) die(`Place Details ${res.status}: ${await res.text()}`);
  const p = await res.json();
  return shape(p.rating, p.userRatingCount, p.googleMapsUri);
}

async function fetchBySearch() {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount,places.googleMapsUri",
    },
    body: JSON.stringify({ textQuery: PLACE_NAME, maxResultCount: 1 }),
  });
  if (!res.ok) die(`Text Search ${res.status}: ${await res.text()}`);
  const p = ((await res.json()).places || [])[0];
  if (!p) die("Text Search returned no matching place");
  console.log(`  place: ${p.displayName && p.displayName.text} (${p.id})`);
  console.log(`  tip:   pin GOOGLE_PLACE_ID=${p.id} to skip this lookup next time`);
  return shape(p.rating, p.userRatingCount, p.googleMapsUri);
}

(async function main() {
  if (!API_KEY) {
    die("GOOGLE_PLACES_API_KEY not set.\n" +
        "    Either export it, or edit src/_data/reviews.json by hand. The\n" +
        "    build only reads that file, so hand-editing is fully supported.");
  }

  let before = null;
  try {
    before = JSON.parse(fs.readFileSync(OUT_FILE, "utf8"));
  } catch (e) { /* first run */ }

  const after = PLACE_ID ? await fetchByPlaceId(PLACE_ID) : await fetchBySearch();
  if (!after) die("Profile returned no rating. Leaving reviews.json untouched.");

  const fmt = (d) => (d ? `${d.rating.toFixed(1)} from ${d.count} review${d.count === 1 ? "" : "s"}` : "(none)");
  console.log(`\n  before: ${fmt(before)}`);
  console.log(`  after:  ${fmt(after)}`);

  if (before && before.rating === after.rating && before.count === after.count) {
    console.log("\n  ✓ unchanged, nothing to commit\n");
    return;
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(after, null, 2) + "\n");
  console.log(`\n  ✓ wrote ${path.relative(process.cwd(), OUT_FILE)}, commit it to publish\n`);
})();
