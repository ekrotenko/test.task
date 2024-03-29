## Install

1. `npm i`
2. install browsers `npx playwright install`
3. Run playwrite UI `npx playwright test --ui`
4. Select desired browser(s) in Projects

## Configuration

Bot is located in `example.spec.ts`
You can find there several parameters to configure:

> `randomVotesAmount` - random number of iterations to be generated. In other words, it's an amount of votes

> `minSeconds` - minimal timeout to wait before voting will be performed

> `maxSeconds` - maximum timeout to wait before voting will be performed. Recommend not to use value >20

##### After bot run

Click refresh to regenerate votes amount
