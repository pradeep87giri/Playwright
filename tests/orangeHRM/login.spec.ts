// import { test, expect } from "@playwright/test";
import { test, expect } from "../../fixtures/baseFixture"



test.describe('Login page', async () => {
    test('Successful login', async ({ page, loginPage, dashboardPage }) => {
        await page.goto('/web/index.php/auth/login')
        await loginPage.setCredentials('Admin', 'admin123')
        await loginPage.clickLogin()
        await dashboardPage.waitForPage()
        await expect(page).toHaveScreenshot('Dahsboard.png')
    })
})