import { t, Selector } from "testcafe";
const venmoCheckbox = Selector('*[name="enableVenmo"]');
const venmoButton = Selector('*[aria-label="venmo"]');
const frame = Selector('*[name*="__paypal_buttons"]');
const payWithPayPal = Selector('*[aria-label="Pay with PayPal"]');
const email = Selector('#email');
const password = Selector('#password');
const next = Selector('#btnNext');
const logIn = Selector('#btnLogin');
const submitPay = Selector('#payment-submit-btn');

fixture`Sample test`
  .meta({
    fixtureID: 'f-0001',
    author: 'GDG',
    app: '',
  })
  .beforeEach(async (t) => {
    await t.navigateTo(
      'http://localhost:3000');
  });

test.meta({
  testID: 't-0001',
  testType: 'Smoke',
  testRailCaseId: '277066',
  priority: 'p1',
})('Sample test', async (t) => {
  await t.click(venmoCheckbox);
  await t.switchToIframe(frame);
  await t.click(venmoButton);
  await t.switchToMainWindow();
  await t.click(payWithPayPal);
  await t.typeText(email, 'sampleApp154154@hotmail.com');
  await t.click(next);
  await t.typeText(password, '!Venmo10');
  await t.click(logIn);
  await t.click(submitPay);
  await t.wait(5000);
  // at this point, the native dialog with the ok button should be visible but it's not
});