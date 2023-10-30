import { test, expect } from '@playwright/test';

test('google test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('anisha');
  await page.getByLabel('Clear').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('abhi');
});