
import { test as base } from "@playwright/test";
import { DashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";

type MyFixtures = {
    loginPage: LoginPage
    dashboardPage: DashboardPage
}


export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
    dashboardPage: async ({ page }, use) => { await use(new DashboardPage(page)); },
})

export { expect } from "@playwright/test"
