import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/form-validation')
await page.getByLabel('Contact Name').fill('dodo');
//await page.locator('xpath=//input[@id:"validationCustom05"][@name:"contactnumber"]').fill('0212458153');
await page.locator('xpath=//input[@id="validationCustom05"][@name="contactnumber"]').fill('13141414')
// await page.getByLabel('PickUp Date').fill('2023-11-26');
// await page.getByLabel('Payment Method').selectOption('cash on delivery');
// await page.getByRole('button',{name:' Register '}).click();
// await expect(page.getByText('Thank you for validating your ticket')).toBeVisible();
});

/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');
  await page.getByLabel('Contact Name').click();
  await page.getByPlaceholder('012-3456789').click();
  await page.getByPlaceholder('012-3456789').fill('012-2545985');
  await page.locator('input[name="pickupdate"]').fill('2023-11-22');
  await page.getByLabel('Payment Method').selectOption('cashondelivery');
  await page.getByRole('button', { name: 'Register' }).click();
});*/