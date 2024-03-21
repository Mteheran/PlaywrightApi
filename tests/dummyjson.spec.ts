import { expect, test } from "@playwright/test";

test("autenticacion", async ({ playwright }) => {
  let apiContext = await playwright.request.newContext({
    baseURL: 'https://dummyjson.com/',
  });

  const requestBody = {
    data: {
        username: 'kminchelle',
        password: '0lelplR',
    }
  }

  const authReponse = await apiContext.post("auth/login", requestBody);
  expect(authReponse.ok()).toBeTruthy();
  const body = await authReponse.json();
  console.log(body);
  expect(body).toHaveProperty("token");
});

test("autenticacion fail", async ({ playwright }) => {
  let apiContext = await playwright.request.newContext({
    baseURL: "https://dummyjson.com/",
  });

  const requestBody = {
    data: {
      username: "kminchelle",
      password: "000000",
    },
  };

  const authReponse = await apiContext.post("auth/login", requestBody);
  expect(authReponse.status()).toBe(400)
});

