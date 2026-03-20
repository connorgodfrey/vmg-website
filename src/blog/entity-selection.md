---
title: "Why VCs Prefer the Delaware C-Corp - And Why That May Not Be Relevant to You"
date: 2026-03-19T12:00:00
tags:
  - blog
layout: layout.njk
description: "Entity selection for fundraising-track startups: tax treatment, governance, franchise taxes, foreign qualification, and a practical decision framework for choosing between a Delaware C-Corp and a New York LLC."
---

# Why VCs Prefer the Delaware C-Corp - And Why That May Not Be Relevant to You

<img src="/assets/entity-selection.jpg" alt="Entity Selection for Startups: Delaware C-Corp vs. New York LLC" style="width:50%; border-radius: 8px; margin-bottom: 20px;">

If you have spent any time reading startup advice online, you have probably encountered some version of this claim: "You need a Delaware C-corp because investors prefer it." That advice is not necessarily wrong, but it is incomplete. The Delaware C-corporation is the default structure for venture-backed startups because it solves a specific set of problems that institutional investors care deeply about. But for many early-stage businesses, particularly those that are bootstrapping, raising from angels, or operating primarily in New York, a New York limited liability company may be the better starting point.

This article walks through a few of the key factors necessary to making an informed decision about entity selection rather than defaulting to conventional wisdom.

---

## Why Venture Capital Investors Prefer C-Corporations

Institutional venture capital funds are almost universally structured as limited partnerships. Their investors (called "limited partners" or "LPs") often include pension funds, university endowments, foundations, and other tax-exempt organizations. This structural reality drives the preference for C-corporations over LLCs.

### The Tax-Exempt Investor Problem: UBTI

LLCs and partnerships are "pass-through" entities: they do not pay entity-level tax. Instead, income and losses flow through to the owners and are reported on their individual returns. For most founders, this is an advantage, avoiding the double taxation that applies to C-corporations (corporate tax on profits, then individual tax on dividends).

But pass-through treatment creates a serious problem for tax-exempt LPs. When a tax-exempt entity (such as a pension fund or endowment) receives income from an active trade or business through a partnership, that income is classified as Unrelated Business Taxable Income (UBTI). UBTI is subject to federal income tax even for otherwise tax-exempt organizations. A VC fund structured as a partnership that invests in an LLC portfolio company would "pass through" operating income to the fund's LPs, potentially triggering UBTI for every tax-exempt LP in the fund.

C-corporations solve this entirely. Because a C-corp pays its own entity-level tax, the income never passes through. Tax-exempt LPs receive dividends (if any), not trade-or-business income, and their tax-exempt status is preserved.

### The Foreign Investor Problem: ECI

A similar issue arises with foreign LPs. When a foreign investor receives income "effectively connected" with a U.S. trade or business (ECI) through a partnership interest, that investor must file a U.S. tax return and pay U.S. income tax on the ECI. Worse, the partnership itself may be required to withhold tax on distributions to foreign partners. For a VC fund with international LPs, investing in pass-through entities creates significant compliance burdens and tax liabilities that those LPs did not sign up for.

Again, a C-corp blocks this issue. The corporate entity absorbs the business income and the foreign LP has no direct U.S. filing obligation from the portfolio company's operations.

### QSBS: The Section 1202 Exclusion

Section 1202 of the Internal Revenue Code provides one of the most powerful tax benefits available to startup founders and early-stage investors. Shareholders who hold Qualified Small Business Stock (QSBS) in a domestic C-corporation for at least the required holding period can exclude a substantial portion of their capital gains from federal income tax upon sale.

Following the One Big Beautiful Bill Act (OBBBA), signed into law on July 4, 2025, the QSBS rules were significantly expanded. For stock issued after that date, the per-taxpayer gain exclusion cap increased from $10 million to $15 million (or 10 times the taxpayer's aggregate adjusted basis in the stock, whichever is greater). The OBBBA also introduced a tiered holding-period structure: shareholders can now exclude 50% of gain on QSBS held for more than three years, 75% for stock held more than four years, and 100% for stock held more than five years. The gross asset threshold for qualifying corporations also increased from $50 million to $75 million, with inflation indexing beginning in 2027.

Critically, QSBS is only available for stock in C-corporations. LLCs, S-corporations, and partnerships do not qualify. While an LLC can convert to a C-corp, the QSBS clock starts at conversion; prior holding periods do not count.

---

## Why Venture Capital Investors Prefer Delaware

### QSBS Conformity

While most states follow federal QSBS treatment, a small number do not conform at all: California, Pennsylvania, Alabama, and Mississippi tax QSBS gains at full state rates regardless of the federal exclusion. Hawaii and Massachusetts are partially conforming, each limiting the exclusion in different ways. (New Jersey was previously non-conforming but enacted legislation bringing the state into full conformity for tax years beginning on or after January 1, 2026.) For a founder in a non-conforming state like California, a large federally excluded gain could still generate a significant state tax bill.

This is not an issue for New York corporations. New York fully conforms to federal Section 1202 on a rolling basis. Gains excluded under Section 1202 at the federal level are also excluded from New York State and New York City personal income tax. This is a meaningful benefit for New York-based founders and investors.

### Governance Simplicity and Standardization

Beyond tax considerations, VCs prefer Delaware C-corps because the governance framework is familiar and standardized. Delaware's General Corporation Law (DGCL) provides well-established rules for issuing multiple classes of stock, granting board seats, protective provisions, anti-dilution mechanisms, and liquidation preferences. The National Venture Capital Association (NVCA) model documents are drafted for Delaware C-corporations. When a company shows up to a Series A as a Delaware C-corp, the legal costs are lower and the negotiation is faster because everyone is working from the same playbook.

LLCs can accomplish all of this through a custom operating agreement, but "custom" is the key word. There is no standardized LLC equivalent of the NVCA term sheet. Every LLC investment requires bespoke documentation, which increases legal costs and negotiation time for both sides. Most institutional VCs will simply require conversion to a C-corp as a condition of investment.

---

## Why This May Not Be Relevant to You

The analysis above assumes a specific profile: a company targeting institutional VC funding from funds with tax-exempt and foreign LPs, anticipating a high-value exit within five to ten years. Many early-stage businesses do not fit this profile.

### If You Are Bootstrapping or Pre-Revenue

A C-corporation pays entity-level federal income tax (currently 21%) on its profits. If the company then distributes those profits to shareholders as dividends, the shareholders pay tax again at the individual level. This "double taxation" is the fundamental trade-off of the C-corp structure. For a profitable bootstrapped business, this can be a significant drag.

An LLC taxed as a partnership (the default for multi-member LLCs) or as a disregarded entity (the default for single-member LLCs) avoids this entirely. Profits are taxed once, at the owner level. Losses pass through as well, which can be especially valuable in the early years when a business is operating at a loss - those losses can offset other income on the founder's personal return, subject to basis and at-risk limitations.

### If Your Investors Are Individuals or Small Funds

Angel investors, friends-and-family rounds, and smaller funds that do not have tax-exempt or foreign LPs do not face the UBTI/ECI problems described above. These investors can comfortably invest in LLCs. In fact, pass-through treatment may be advantageous for individual investors who want to take advantage of early-stage losses or who prefer a single layer of tax on operating income.

SAFE instruments and convertible notes can be issued by LLCs. If you eventually need to convert to a C-corp to accommodate institutional investors, you can do so at that time.

It is worth putting the VC-backed path in perspective. The vast majority of new businesses in the United States never raise institutional venture capital. According to data from the National Venture Capital Association and PitchBook, roughly 13,000 to 15,000 U.S. companies receive VC funding in a given year, out of millions of new business formations. Even among companies that do raise outside capital, the most common sources are personal savings, friends and family, credit cards, and angel investors. Institutional VC (funds with tax-exempt and foreign LPs where the UBTI/ECI concerns described above actually bite) represents a narrow slice of the overall funding landscape. The Delaware C-corp structure is optimized for that slice. If your fundraising plan involves angels, revenue-based financing, SBA loans, or small funds composed primarily of taxable U.S. individuals, the structural advantages of a C-corp are far less compelling, and the tax disadvantages are real.

### If You Are Operating Primarily in New York

If your team, customers, and operations are in New York, forming a Delaware entity does not exempt you from New York taxes or compliance obligations. You will need to foreign-qualify in New York (or any other state where you are "doing business"), which means paying filing fees, maintaining a registered agent, and meeting publication requirements. A New York LLC or corporation that operates only in New York avoids the cost and complexity of dual-state compliance.

---

## Other Risks in Choosing a Delaware C-Corp

### Federal Income Tax

The C-corporation's 21% federal corporate tax rate is applied at the entity level before any money reaches shareholders. If the corporation distributes profits as dividends, shareholders pay a second layer of tax at qualified dividend rates (0%, 15%, or 20% depending on the shareholder's income bracket, plus 3.8% net investment income tax for higher earners). For a founder who is also drawing a salary, the company can deduct reasonable compensation as a business expense, but salary is subject to payroll taxes that dividends are not. The interplay between salary, retained earnings, and distributions requires ongoing tax planning.

By contrast, an LLC taxed as a partnership passes all income and deductions through to its members, who report them on their personal returns. There is no entity-level federal tax. Self-employment tax applies to active members' distributive share of ordinary business income, which adds a meaningful percentage on top of ordinary income tax rates. However, the total effective tax burden on a dollar of LLC profit distributed to an active founder is typically lower than the combined corporate-plus-dividend rate on a dollar of C-corp profit, particularly at moderate income levels.

Early-stage companies that are operating at a loss face an additional consideration. C-corporation losses are trapped at the entity level; they do not flow through to shareholders and cannot offset the founder's other personal income. LLC losses, by contrast, pass through to members and can offset other income on the member's personal return, subject to the basis, at-risk, and passive activity loss rules. For a founder with other income sources (a spouse's salary, consulting income, investment gains), the ability to use startup losses personally can represent meaningful near-term tax savings.

### New York State and City Tax Considerations

New York imposes its own layer of taxation that must be factored into the entity-selection analysis. C-corporations doing business in New York are subject to the state's corporate franchise tax under Article 9-A of the Tax Law. The tax is computed as the highest of several bases, including a business income base, a capital base, or a fixed-dollar minimum tax based on New York receipts. The applicable rates depend on the corporation's size and type of business, and some rate provisions are subject to temporary surcharges that may sunset. New York City imposes an additional General Corporation Tax on business income allocated to the City. The combined state and city burden can be substantial for a profitable company, and founders should consult with a tax advisor to model the specific impact.

LLCs taxed as partnerships are not subject to entity-level income tax in New York. However, every LLC with New York-source income must pay an annual filing fee (Form IT-204-LL) that ranges from $25 to $4,500 based on gross income derived from New York sources. Members who are New York residents pay personal income tax on their distributive share at rates up to 10.9% (state) plus up to 3.876% (NYC). There is no entity-level "franchise tax" on LLCs in New York. An LLC that elects to be taxed as a C-corporation becomes subject to the same Article 9-A franchise tax and NYC General Corporation Tax as a traditional corporation, so this election should be made deliberately.

### Franchise Taxes and Annual Compliance Costs

Every entity incurs annual state-level maintenance costs. The type of entity and state of formation determine what you owe and when.

Delaware corporations pay an annual franchise tax ranging from a $175 minimum (under the Authorized Shares Method for 5,000 shares or fewer) to a $200,000 maximum ($250,000 for Large Corporate Filers). The state offers two calculation methods and the corporation pays the lesser of the two. A typical VC-backed startup authorized to issue 10 million shares of common stock could face a bill in the tens of thousands under the default Authorized Shares Method. However, by affirmatively reporting total gross assets and issued shares under the Assumed Par Value Capital Method when filing the annual report, many early-stage companies can reduce the tax to the $400 minimum. The annual report and franchise tax payment are due March 1, with a $200 penalty and 1.5% monthly interest for late filing. Delaware also requires a registered agent ($50 to $300/year).

Delaware LLCs pay a flat $300 annual tax due June 1. No annual report is required. This makes the Delaware LLC substantially cheaper to maintain than a Delaware corporation in the early years.

New York corporations and LLCs both file a Biennial Statement with the Department of State every two years ($9 filing fee). New York LLCs with New York-source income must also pay the annual filing fee on Form IT-204-LL, ranging from $25 (gross income under $100,000) to $4,500 (gross income of $25 million or more). New York does not impose a separate "franchise tax" on LLCs; the biennial statement and annual filing fee are the primary recurring obligations.

### Foreign Qualification: The Hidden Cost of Incorporating Out of State

A company formed in one state but doing business in another must "foreign-qualify" in each state where it operates. For a Delaware entity operating in New York, this means filing an Application for Authority with the New York Department of State ($225 for corporations, $250 for LLCs), satisfying New York's publication requirement, and maintaining ongoing dual-state compliance.

Once foreign-qualified, the entity must maintain good standing in both Delaware and New York, pay annual fees or taxes to both states, file reports with both, and maintain a Delaware registered agent. New York also imposes a publication requirement on foreign-qualifying entities, which adds to the upfront cost.

For a business that operates exclusively in New York, forming in Delaware adds upfront filing and publication costs, ongoing dual-jurisdiction administrative burden, and additional annual fees with no governance or tax benefit that cannot be achieved with a New York entity. The advantages of Delaware (its Court of Chancery, well-developed case law, and VC-standard documentation) become relevant when institutional capital is on the table. For most pre-revenue or bootstrapping founders operating in New York, forming a New York entity and converting to Delaware later is the more cost-effective path.

---

## A Practical Decision Framework

Rather than defaulting to any particular structure, consider where your business sits today and where it is headed:

<table style="width:100%; border-collapse:collapse; margin:1.5em 0; font-size:0.95em;">
  <thead>
    <tr style="background:#1B3A5C; color:#fff;">
      <th style="border:1px solid #ccc; padding:10px 14px; text-align:left; width:35%;">Your Situation</th>
      <th style="border:1px solid #ccc; padding:10px 14px; text-align:left; width:25%;">Recommended Starting Entity</th>
      <th style="border:1px solid #ccc; padding:10px 14px; text-align:left; width:40%;">Conversion Path</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ccc; padding:10px 14px;">Targeting institutional VC (Series A or beyond) within 12-18 months</td>
      <td style="border:1px solid #ccc; padding:10px 14px; font-weight:600;">Delaware C-Corporation</td>
      <td style="border:1px solid #ccc; padding:10px 14px;">None needed - this is the target structure</td>
    </tr>
    <tr style="background:#f7f5f2;">
      <td style="border:1px solid #ccc; padding:10px 14px;">Pre-revenue or bootstrapping; may raise VC later but not imminently</td>
      <td style="border:1px solid #ccc; padding:10px 14px; font-weight:600;">New York or Delaware LLC</td>
      <td style="border:1px solid #ccc; padding:10px 14px;">Convert to DE C-Corp when a priced round is on the horizon; QSBS clock starts at conversion</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px 14px;">Raising from angels, friends/family, or small funds (no tax-exempt/foreign LPs)</td>
      <td style="border:1px solid #ccc; padding:10px 14px; font-weight:600;">LLC (NY or DE, depending on operations)</td>
      <td style="border:1px solid #ccc; padding:10px 14px;">SAFEs and convertible notes work in LLCs; convert if/when institutional capital requires it</td>
    </tr>
    <tr style="background:#f7f5f2;">
      <td style="border:1px solid #ccc; padding:10px 14px;">Lifestyle or cash-flow business; no intention to seek outside equity</td>
      <td style="border:1px solid #ccc; padding:10px 14px; font-weight:600;">New York LLC</td>
      <td style="border:1px solid #ccc; padding:10px 14px;">No conversion needed; pass-through taxation is optimal</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px 14px;">Targeting regional accelerators (e.g., 43North, LaunchNY, Buffalo Angels)</td>
      <td style="border:1px solid #ccc; padding:10px 14px; font-weight:600;">Delaware LLC with planned conversion to DE C-Corp</td>
      <td style="border:1px solid #ccc; padding:10px 14px;">Convert prior to or concurrent with the accelerator's investment; many programs require or strongly prefer a C-Corp</td>
    </tr>
  </tbody>
</table>

### A Note on LLC-to-C-Corp Conversion

Several of the paths above contemplate converting an LLC to a C-corporation. This is a well-established process, but it is not free. The conversion itself is generally treated as a tax-free incorporation under IRC Section 351, provided the transferors are in "control" of the corporation immediately after the transfer. However, there are real costs and complexities to plan for: the QSBS holding period resets at conversion (it does not relate back to the LLC's formation date), the LLC's operating agreement allocations and distribution waterfalls may not map cleanly onto a corporate equity structure (requiring a cap table cleanup), and the mechanical process involves state filings, new governing documents, and potentially re-issuing equity. Delaware permits statutory conversion under DGCL Section 265, or the LLC can be merged into a newly formed corporation. The takeaway is not that conversion is prohibitively expensive, but that it is a real transaction with real costs, and those costs are worth incurring at the right time rather than prematurely.

---

## Conclusion

The Delaware C-corporation is the gold standard for venture-backed startups - not because it is inherently "better," but because it solves specific structural, tax, and documentation problems that institutional VC investors need solved. If you are on a clear path to institutional fundraising, you should strongly consider starting as (or converting to) a Delaware C-corp sooner rather than later.

But if you are earlier in your journey - testing a concept, building revenue, raising from individuals, or operating locally in New York - an LLC may be the more practical and tax-efficient starting point. The conversion path to a C-corp is well-trodden and can be executed when the business and its investors require it.

The worst outcome is paying for a structure you do not yet need, or - conversely - scrambling to restructure under time pressure when a term sheet arrives. The right time to think about entity selection is now, with the benefit of informed counsel.

VMG Business Advisory can assist with entity formation, corporate governance, and fundraising readiness to help founders select the right structure for their stage and goals.

---

*This article is provided for general informational and educational purposes only. It does not constitute legal advice, tax advice, or a recommendation to take any particular course of action. The information contained herein is current as of March 2026 and is subject to change as laws, regulations, and market practices evolve. Entity selection involves complex legal and tax considerations that are specific to each business's facts and circumstances. Before forming, converting, or restructuring any business entity, you should consult with qualified legal and tax professionals who can evaluate your specific situation.*

---

**Related practice areas:** [Entity Formation & Corporate Governance](/practice-areas/entity-formation-corporate-governance/) · [Private Placements & Securities](/practice-areas/private-placements-securities/) · [Start-Up Counseling](/practice-areas/startup-advisory/)
