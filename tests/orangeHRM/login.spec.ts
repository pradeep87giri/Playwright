import { test, expect } from "@playwright/test";



test.describe('Login page', async() => {
    test('Successful login', async({page}) => {
        await page.goto ('/web/index.php/auth/login')
        await page.getByPlaceholder('Username').fill('Admin')
        await page.getByPlaceholder('Password').fill('admin123')
        await page.getByRole('button', {name: 'Login'}).click()
        // await page.waitForLoadState('load')
        // await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
        await page.getByRole('heading', {name: 'Dashboard'}).waitFor({state: "visible"})
        await expect(page).toHaveScreenshot('Dahsboard.png')
        // await page.screenshot( {path: './snapshots/Dahsboard.png', fullPage: true})
    })
})