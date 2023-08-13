import { Locator, Page } from "@playwright/test";


export class DashboardPage {
    private dashboardHeading: Locator

    constructor(public page: Page) {
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' })
    }

    async waitForPage() {
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('networkidle')
        await this.dashboardHeading.waitFor({ state: "visible" })
    }
} 