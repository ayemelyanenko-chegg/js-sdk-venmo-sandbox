import { useFormReducer } from './FormContext';

export default function ButtonConfig() {
  const [
    { horizontal, standalone, clientID },
    dispatch,
  ] = useFormReducer();

  const onChangeHandler = (event) => {
    let dispatchType
    let value
    
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
