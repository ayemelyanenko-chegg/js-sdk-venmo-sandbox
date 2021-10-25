import React, { createContext, useContext, useReducer } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const FormContext = createContext(null);
const FormDispatchContext = createContext(null);

function formReducer(state, action) {
  switch (action.type) {
    case "setHorizontal":
      return {
        ...state,
        horizontal: action.value,
      };

    case "setStandalone":
      return {
        ...state,
        standalone: action.value,
      };

    case "setClientID":
      return {
        ...state,
        clientID: action.value,
      }

    case "setEnableVenmo":
      return {
        ...state,
        enableVenmo: action.value,
      }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function useFormReducer() {
  const formContext = useContext(FormContext);
  const dispatchContext = useContext(FormDispatchContext);

  return [formContext, dispatchContext];
}

export function FormProvider({ children }) {
  const initialState = {
    clientID: 'sb',
    horizontal: false,
    standalone: false,
    enableVenmo: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        <PayPalScriptProvider options={{
          "client-id": "alc_client1",
          sdkBaseURL: "https://localhost:8443/sdk/js",
          "enable-funding": "venmo"
        }}>
          {children}
        </PayPalScriptProvider>
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
