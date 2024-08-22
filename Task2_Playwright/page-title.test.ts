import { test, expect } from '@playwright/test';

test('Проверка заголовка страницы Playwright', async ({ page }) => {
    // Открываем веб-страницу
    await page.goto('https://playwright.dev/');

    // Проверка существования страницы
    expect(page.url()).toBe('https://playwright.dev/');

    // Проверка заголовка страницы
    const title = await page.title();
    expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
});