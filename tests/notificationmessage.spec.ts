import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
  await page.goto('https://practice.expandtesting.com/notification-message-rendered');
  await page.getByRole('link', { name: 'Click here' }).click();
  const alert= await page.locator('#flash')
  await expect(alert).toHaveText('');
});
 