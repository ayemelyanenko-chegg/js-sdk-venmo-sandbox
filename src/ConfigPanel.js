export default function ConfigPanel() {
  return (
    <div className="ConfigPanel">
      <div>
        <label>Client ID</label>
        <input type="text"></input>
      </div>
      <div className="CheckboxSection">
        <div>
          <input type="checkbox"></input>
          <label>Horizontal</label>
        </div>
        <div>
          <input type="checkbox"></input>
          <label>Standalone</label>
        </div>
      </div>
    </div>
  )
}
