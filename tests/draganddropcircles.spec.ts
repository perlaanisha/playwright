import { test, expect } from '@playwright/test';

test('web inputs',async({page})=>{
await page.goto('https://practice.expandtesting.com/drag-and-drop-circles')
await page.locator('#source').dragTo(page.locator('#target'));
await page.locator('#source').dragTo(page.locator('#target'));
await page.locator('#source').dragTo(page.locator('#target'));
});