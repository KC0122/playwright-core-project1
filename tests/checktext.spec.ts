import { test, expect } from '@playwright/test';

test('Upload via filechooser method', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/upload');
  const filechooserpromise=  page.waitForEvent('filechooser');
  await page.locator('input#fileInput').click();
  const choosefile = await filechooserpromise;
  await choosefile.setFiles('./tests/upload/Txt.txt');
  await page.waitForTimeout(6000);
  await page.locator('button#fileSubmit').click();
  await expect(page.locator('h1')).toHaveText(/File Uploaded!/);    
});


test('Upload a text file using Input method ', async ({ page }) => {
  await page.goto('https://qa-automation-practice.netlify.app/file-upload.html');
  await page.locator('input[type="file"]').setInputFiles('./tests/upload/Txt.txt');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('div#file_upload_response')).toHaveText(/successfully uploaded/);
  });
