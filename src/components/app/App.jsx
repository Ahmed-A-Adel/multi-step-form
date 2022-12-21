import "./App.scss";
function App({ children }) {
  return (
    <div className="app">
      <div className="app_container">{children}</div>
    </div>
  );
}

export default App;
