import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/dynamic-table')
await page.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');
  await page.getByRole('cell', { name: '0.4%' }).click();
  await page.getByText('Chrome CPU: 0.4%').click();
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');
  await page.getByRole('cell', { name: 'Chrome' }).click();
  await page.getByRole('cell', { name: '9.1%' }).nth(1).click();
  await page.getByText('Chrome CPU: 9.1%').click();
  await page.goto('https://practice.expandtesting.com/dynamic-table');
  await page.getByRole('cell', { name: '86 MB' }).click();
  await page.getByRole('cell', { name: '4.2%' }).click();
  await page.getByText('Chrome CPU: 4.2%').click();
});