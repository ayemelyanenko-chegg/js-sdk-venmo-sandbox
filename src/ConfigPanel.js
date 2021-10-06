export default function ConfigPanel() {
  return (
    <div className="ConfigPanel">
      <div className="ClientIdContainer">
        <label>Client ID</label>
        <input type="text"></input>
      </div>
      <div className="CheckboxContainer">
        <div className="HorizontalSelection">
          <input type="checkbox"></input>
          <label>Horizontal</label>
        </div>
        <div className="StandaloneSelection">
          <input type="checkbox"></input>
          <label>Standalone</label>
        </div>
      </div>
    </div>
  )
}
