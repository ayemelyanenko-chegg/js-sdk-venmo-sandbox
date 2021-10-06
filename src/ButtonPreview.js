import { PayPalButtons } from "@paypal/react-paypal-js";
import { useFormReducer } from './FormContext';

export default function ButtonPreview() {

  const [
    { horizontal, standalone },
  ] = useFormReducer();

  console.log("horizontal", horizontal)
  console.log("standalone", standalone)

  function generateButtonPreview() {
    if (horizontal) {
      return(
        <PayPalButtons forceReRender={horizontal} style={{layout: 'horizontal'}}/>
      )
    }

    if (standalone) {
      return(
        <PayPalButtons fundingSource={'venmo'} />
      )
    }

    return(
      <PayPalButtons/>
    )
  }

  return (
    <div className="ButtonPreview">
        { generateButtonPreview() }
    </div>
  )
}
