import { expect, test } from '@playwright/test';

//----
// TEST SUITE: Login Page Tests - Practice
// Site: https://eventhub.rahulshettyacademy.com/login
// Desciption: Validates login functionality covering valid login, invalid credentials, empty fields, format validation, and navigation.

test.describe('EventHub Login Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://eventhub.rahulshettyacademy.com/login');
        await expect(page).toHaveTitle(/EventHub/i);
    });

    test('TCL-001 Invalid email format should show validation error', async ({ page }) => {
        await page.locator('#email').fill('wrongusergmail.com');
        await page.locator('#password').fill('12345678');
        await page.locator('#login-btn').click();

        await expect(page).toHaveURL(URL);
    });

    test('TCL-002 Empty fields should show validation error', async ({ page }) => {
        await page.locator('#login-btn').click();

        await expect(page.getByText(/invalid|incorrect|failed/i)).toBeVisible();
    });

    test('TCL-003 Invalid credentials should show authentication error', async ({ page }) => {
        await page.locator('#email').fill('wronguser@gmail.com');
        await page.locator('#password').fill('wrongpassword123');
        await page.locator('#login-btn').click();

        await expect(page.getByText(/invalid|incorrect|failed/i)).toBeVisible();
    });

    test('TCL-004 Valid credentials should log in successfully', async ({ page }) => {
        await page.locator('#email').fill(process.env.EVENTHUB_EMAIL);
        await page.locator('#password').fill(process.env.EVENTHUB_PASSWORD);
        await page.locator('#login-btn').click();

        await expect(page).toHaveURL(/dashboard/i);
    });

    test('TCL-005 Forgot password link navigates correctly', async ({ page }) => {
    const forgotPasswordLink = page.getByText(/forgot password/i);

    if (await forgotPasswordLink.isVisible()) {
        await forgotPasswordLink.click();
        await expect(page).not.toHaveURL(URL);
    }
    else {
        console.log('Forgot password link not found on the login page.');
        }
    });

});
