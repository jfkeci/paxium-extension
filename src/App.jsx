/* import Navbar from "./components/Core/Navbar/Navbar"; */
import Sidebar from "./components/Core/Sidebar/Sidebar";
import ViewHolder from "./components/Core/ViewHolder/ViewHolder";

function App() {
  return (
    <div>
      <Sidebar />

      <div className="pl-40">
        {/* <Navbar /> */}
        <ViewHolder />
      </div>
    </div>
  );
}

export default App;
