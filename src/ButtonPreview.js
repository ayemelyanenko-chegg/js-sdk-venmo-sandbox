import { PayPalButtons } from "@paypal/react-paypal-js";
import { useFormReducer } from './FormContext';

export default function ButtonPreview() {

  const [
    { horizontal, standalone },
  ] = useFormReducer();

  let sourceClicked;

  const buttonOptions = {
    onClick: function (data) {
      sourceClicked = data.fundingSource;
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        application_context: {
          shipping_preference: 'SET_PROVIDED_ADDRESS'
        },
        purchase_units: [{
          amount: {
            value: '1.00',
            shipping: {
              value: '5.00',
            },
          },
          shipping: {
            name: {
              full_name: 'Fake Name'
            },
            address: {
              address_line_1: 'A Fake Street',
              postal_code: '11590',
              country_code: 'US',
              city: 'Fake City',
              admin_area_2: 'IL',
            }
          }
        }]
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {
        let transaction = orderData.purchase_units[0].payments.captures[0];

        alert(`${sourceClicked[0].toUpperCase() + sourceClicked.substring(1)} transaction ${transaction.status.toLowerCase()}`);
      });
    },
    onError: function(err) {
      return alert("An error occurred. Please try again.")
    }
  }

  function generateButtonPreview() {
    if (horizontal) {
      return(
        <PayPalButtons
          forceReRender={horizontal}
          style={{layout: 'horizontal'}}
          { ...buttonOptions }
        />
      )
    }

    if (standalone) {
      return(
        <PayPalButtons
          fundingSource={'venmo'}
          { ...buttonOptions }
        />
      )
    }

    return(
      <PayPalButtons { ...buttonOptions } />
    )
  }

  return (
    <div className="ButtonPreview">
        { generateButtonPreview() }
    </div>
  )
}
