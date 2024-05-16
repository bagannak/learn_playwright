import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();
  // await page.click('#login2');
  await page.fill("#loginusername", "Baganna");
  await page.type("input[id='loginpassword']", "Bag123");

  await page.click('//*[@onclick="logIn()"]');

  const logoutLink = await page.locator("#logout2");

  await expect(logoutLink).toBeVisible();
  await page.close();
});
