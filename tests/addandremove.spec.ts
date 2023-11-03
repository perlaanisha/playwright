import{ test , expect } from '@playwright/test';
test('addandremove',async({page})=>{
await page.goto('https://practice.expandtesting.com/add-remove-elements');
await page.getByRole('button',{name: 'Add Element'}).click();
await page.getByRole('button',{name: 'Add Element'}).click();
await page.getByRole('button',{name: 'Add Element'}).click();
await page.getByRole('button',{name: 'Delete'}).nth(1).click();
});
