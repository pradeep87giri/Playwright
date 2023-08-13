import { Locator, Page } from "@playwright/test";


export class LoginPage {
    private uName: Locator
    private pwd: Locator
    private login: Locator

    constructor(page: Page) {
        this.uName = page.getByPlaceholder('Username')
        this.pwd = page.getByPlaceholder('Password')
        this.login = page.getByRole('button', { name: 'Login' })
    }

    async setCredentials(userName: string, password: string) {
        await this.uName.fill(userName)
        await this.pwd.fill(password)
    }

    async clickLogin() {
        await this.login.click()
    }
} 