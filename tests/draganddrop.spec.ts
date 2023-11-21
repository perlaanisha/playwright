import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/drag-and-drop')
await page.locator('#column-a').hover();
await page.mouse.down();
await page.locator('#column-b').hover();
await page.mouse.up();
});