import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/my-browser')
await page.getByRole('button',{name:'Show Browser Information'}).click();
await expect(page.getByText('User Agent')).toBeVisible();
await page.getByRole('button',{name:'Hide Browser Information'}).click();
});