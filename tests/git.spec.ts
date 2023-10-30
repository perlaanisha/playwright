import { test, expect } from '@playwright/test';
import { GIT_USER , GIT_PASSWORD} from '../utilities/constants';


test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill(GIT_USER);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(GIT_PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});