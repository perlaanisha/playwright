import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/radio-buttons')
await page.getByLabel('Yellow').click();
await page.getByLabel('Football').click();
});