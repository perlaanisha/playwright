import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/inputs')
await page.getByLabel('Input: Number').click();
await page.getByLabel('Input: Number').fill("3");
await page.getByLabel('Input: Text').click();
await page.getByLabel('Input: Text').fill('naysha');
await page.getByLabel('Input: Password').click();
await page.getByLabel('Input: Password').fill('Anisha@123');
await page.getByLabel('Input: Date').click();
let date ="2021-08-26"
await page.getByLabel('Input: Date').fill(date);
await page.getByRole('button',{name:'Display Inputs'}).click();
});

