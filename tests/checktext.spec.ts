import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/BBC - Home/);
});


test('Upload a text file to QA-Automation site', async ({ page }) => {
  await page.goto('https://qa-automation-practice.netlify.app/file-upload.html');
  await page.locator('input[type="file"]').setInputFiles('./tests/Txt.txt');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('div#file_upload_response')).toHaveText(/successfully uploaded/);
  });
