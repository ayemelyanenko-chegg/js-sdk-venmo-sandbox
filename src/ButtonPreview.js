import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function ButtonPreview() {
  return (
    <div className="ButtonPreview">
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons/>
      </PayPalScriptProvider>
    </div>
  )
}
