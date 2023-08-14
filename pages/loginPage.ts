import { Locator, Page, expect } from "@playwright/test";


export class LoginPage {
    private uName: Locator
    private pwd: Locator
    private login: Locator
    private alert: Locator

    constructor(page: Page) {
        this.uName = page.locator("[name='username']")
        this.pwd = page.locator("[name='password']")
        this.login = page.locator("[type='submit']")
        this.alert = page.locator("[role='alert']")
    }

    async setCredentials(userName: string, password: string) {
        await this.uName.fill(userName)
        await this.pwd.fill(password)
    }

    async clickLogin() {
        await this.login.click()
    }

    async verifyAlertMsg(msg: string){
        let actualMsg = await this.alert.innerText()
        expect(actualMsg).toEqual(msg)
    }
} 