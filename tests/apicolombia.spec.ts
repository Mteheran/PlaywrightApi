import { expect, test } from "@playwright/test";

test("Info Colombia", async ({ playwright }) => {
    let apiContext = await playwright.request.newContext({});
    const infoColombia = await apiContext.get("country/colombia");
    expect(infoColombia.ok()).toBeTruthy();
    const body = await infoColombia.json();

    expect(body).toHaveProperty("id", 1);
    expect(body).toHaveProperty("name", "Colombia");
});