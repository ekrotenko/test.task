import { test, expect, chromium } from "@playwright/test";
import { beforeEach, describe } from "node:test";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function blockThread(delaySeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, delaySeconds * 1000);
  });
}

const randomVotesAmount = random(60, 150);

describe("yle", () => {
  for (let i = 0; i < randomVotesAmount; i++) {
    test(`vote iteration #${i + 1}`, async ({ page }) => {
      // for not being too fast between votes
      const minSeconds = 5;
      const maxSeconds = 15;
      const delaySeconds = random(minSeconds, maxSeconds);
      await blockThread(delaySeconds);

      await page.goto("https://yle.fi/a/74-20080516");

      await page.getByLabel("Vain välttämättömät").click();

      await page.click(
        'label:has(span:has-text("En koe sitä tarpeelliseksi."))'
      );

      await page.waitForSelector(".yo-poll-results__option");

      const fontWeight = await page.$eval(
        'p:has-text("En koe sitä tarpeelliseksi.")',
        (element) => {
          return window.getComputedStyle(element).fontWeight;
        }
      );
      // Expect a title "to contain" a substring.
      await expect(fontWeight).toEqual("700");
    });
  }
});
