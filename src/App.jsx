import "./App.css";
import Sidebar from "./components/Core/Sidebar/Sidebar";
import ViewHolder from "./components/Core/ViewHolder/ViewHolder";

function App() {
  return (
    <div>
      <Sidebar />

      <div>
        <ViewHolder />
      </div>
    </div>
  );
}

export default App;
