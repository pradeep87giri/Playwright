import { Locator, Page } from "@playwright/test";


export class DashboardPage {
    private dashboardHeading: Locator
    private myInfo: Locator
    private personalDetails: Locator

    constructor(public page: Page) {
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' })
        this.myInfo = page.getByText('My Info')
        this.personalDetails = page.getByRole('heading', {name: 'Personal Details'})
    }

    async waitForPage() {
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('networkidle')
        await this.dashboardHeading.waitFor({ state: "visible" })
    }

    async goToMyInfo() {
        await this.myInfo.click()
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('networkidle')
        await this.personalDetails.waitFor({ state: "visible" })
    }
} 