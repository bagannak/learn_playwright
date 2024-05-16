const { test, expect } = require("@playwright/test");
// const { log } = require("console");

test("Home Page", async ({ page }) => {
 await  page.goto("https://www.demoblaze.com/index.html");

   const pagetitle = await page.title();
   console.log('Page title: ',pagetitle);
   const pageURL = page.url();

  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL(pageURL);
  await page.close();
});
