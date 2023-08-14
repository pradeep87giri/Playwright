// import { test, expect } from "@playwright/test";
import { test, expect } from "../../fixtures/baseFixture"
import { data } from "../../resources/testData"


test.describe('Login page', async () => {
    test('Successful login', async ({ page, loginPage, dashboardPage }) => {
        await page.goto('/web/index.php/auth/login')
        await loginPage.setCredentials(data.userName, data.password)
        await loginPage.clickLogin()
        await dashboardPage.waitForPage()
        await expect(page).toHaveScreenshot('Dahsboard.png')
    })

    test.only('Invalid login credentials', async ({ page, loginPage }) => {
        await page.goto('/web/index.php/auth/login')
        await loginPage.setCredentials("abc", "123")
        await loginPage.clickLogin()
        await loginPage.verifyAlertMsg('Invalid credentials')
    })
})