import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.waitForSelector("//div[@id='tbodyid']//h4/a")

  const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
});
