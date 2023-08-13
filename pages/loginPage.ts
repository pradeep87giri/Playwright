import { Locator, Page } from "@playwright/test";


export class LoginPage {
    private uName: Locator
    private pwd: Locator
    private login: Locator

    constructor(page: Page) {
        this.uName = page.locator("[name='username']")
        this.pwd = page.locator("[name='password']")
        this.login = page.locator("[type='submit']")
    }

    async setCredentials(userName: string, password: string) {
        await this.uName.fill(userName)
        await this.pwd.fill(password)
    }

    async clickLogin() {
        await this.login.click()
    }
} 