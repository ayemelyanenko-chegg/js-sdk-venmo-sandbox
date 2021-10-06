import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useFormReducer } from './FormContext';

export default function ButtonConfig() {
  const [
    { horizontal, standalone, clientID, enableVenmo },
    dispatch,
  ] = useFormReducer();

  const [, reactPayPalDispatch] = usePayPalScriptReducer();

  const onChangeHandler = (event) => {
    let dispatchType
    let value

    if (event.target.name === 'enableVenmo') {
      dispatchType = "setEnableVenmo"
      value = event.target.checked

      if (event.target.checked) {
          reactPayPalDispatch({
            type: "resetOptions",
            value: {
              "client-id": clientID,
              "enable-funding": "venmo"
            }
          });
      }
    }
    
    if (event.target.name === 'horizontal') {
      dispatchType = "setHorizontal"
      value = event.target.checked
    } 
    
    if (event.target.name === 'standalone') {
      dispatchType = "setStandalone"
      value = event.target.checked
    }
    
    if (event.target.name === 'clientID') {
      dispatchType = "setClientID"
      value = event.target.value
    }

    dispatch({ type: dispatchType, value: value });
  };

  return (
    <div onChange={onChangeHandler} className="ButtonConfig">
      <div className="ClientIdContainer">
        <label>Client ID</label>
        <input name="clientID" type="text" defaultValue={clientID}></input>
      </div>
      <div className="CheckboxContainer">
        <div className="EnableVenmoSelection">
          <input name="enableVenmo" type="checkbox" defaultChecked={enableVenmo}></input>
          <label>Enable Venmo</label>
        </div>
        <div className="HorizontalSelection">
          <input name="horizontal" type="checkbox" defaultChecked={horizontal}></input>
          <label>Horizontal</label>
        </div>
        <div className="StandaloneSelection">
          <input name="standalone" type="checkbox" defaultChecked={standalone}></input>
          <label>Standalone</label>
        </div>
      </div>
    </div>
  )
}
