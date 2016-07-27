# When can I buy a house?
## A simple one-pager to show users when they can afford an average London deposit and offer advice to help get on the property ladder sooner.

### Objectives

- Use real-world figures for average deposit sizes, the rate at which they grow, and inflation, in order to shock visitors into taking saving and investing their money seriously. If they don't think about saving for a deposit seriously until they want to buy a house (say, in their mid-30s) it could already be too late.
- Communicate that the earlier you start thinking about these things and acting on them, the more likely it is that you'll be able to buy a house within a reasonable time frame.
- Establish basic building blocks of financial planning, such as budgeting, 'growing the gap', and passive investments, with links to resources - as well as questioning whether homeownership is really the best idea.

### Requirements

- Accepts user input about their existing savings, regular monthly savings, and interest rates, and returns a results page with helpful links based on the amounts provided.
- If users already have enough money for a deposit, shows a selection of articles covering topics including whether it's a good idea to buy a home, the best places to buy a home, shared ownership schemes, and so on.
- If users don't have enough money but are saving/investing enough, it tells them when they'll be able to afford a deposit, and recommends some ways that could make that sooner (looking at shared ownership, investing money better, saving more through budgeting).
- If users don't have enough money and aren't saving/investing enough, sends links to websites about budgeting, finding better jobs, and so on.
- Allows users to share their results on social media.
- Add pages (About, Resources, etc) to add further information.
- Add a disclaimer noting that future projections are not guaranteed to be accurate and that the website is intended to promote long-term thinking about personal finance.
- Add a header linking to About/Resources/etc and a footer with 'Steve Hopkinson 2016'.

### Improvements

- Centre content vertically within page.
- Edit graph so that, if the two lines do cross over, the graph only shows one year past that point.
- Refactor to remove jQuery and Bootstrap.
- Add adaptive design so that page displays properly on mobile as well as desktop.
- Remove dependence on chart.js and write new chart-drawing implementation using SVG rather than canvas. 

### Reference materials

- http://moneyfacts.co.uk/news/mortgages/london-deposits-grow-as-house-prices-soar/
- http://www.standard.co.uk/news/london/londoners-face-46year-wait-to-save-a-deposit-as-england-and-wales-average-home-price-hits-300000-a3207991.html
- https://www.theguardian.com/money/2015/sep/14/homes-cheap-own-expensive-buy-house-prices-first-time-buyers
- http://moneyfacts.co.uk/news/mortgages/london-deposits-grow-as-house-prices-soar/
- http://www.dailymail.co.uk/property/article-3390304/First-time-buyers-need-deposit-33K-says-Halifax.html
- http://www.moneysupermarket.com/mortgages/hubs/first-time-buyers/how-to-raise-a-deposit/
- http://www.independent.co.uk/news/business/analysis-and-features/the-impossible-price-of-a-house-deposit-a6674521.html
- http://stackoverflow.com/questions/396145/how-to-vertically-center-a-div-for-all-browsers
- http://www.cityam.com/232024/london-house-prices-first-time-buyers-pay-91000-deposit-as-fewer-get-on-the-property-ladder-in-2015
- http://moneyweek.com/london-property-market-is-heading-for-a-fall/
- http://www.independent.co.uk/voices/the-housing-bubble-is-finally-bursting-heres-what-that-means-for-you-a7020556.html
- http://www.biznews.com/columnists/bloomberg-view/2016/04/06/bloomberg-view-london-property-bubble-to-burst-painful-correction-coming/
- http://www.thisismoney.co.uk/money/comment/article-3583698/DAN-HYDE-Warning-signs-housing-bubble-POP.html
- http://www.cnbc.com/2016/06/06/bubble-or-boom-heres-what-you-really-need-to-know-about-london-property.html
