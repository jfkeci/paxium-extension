import Login from "../../../views/Login";
import Tasks from "../../../views/Tasks";
import CheckIn from "../../../views/CheckIn";
import Register from "../../../views/Register";
import Dashboard from "../../../views/Dashboard";
import { viewStore } from "../../../store/view.store";

export default function ViewHolder() {
  const { currentView } = viewStore();

  const renderView = () => {
    switch (currentView) {
      case "Dashboard":
        return <Dashboard />;
      case "CheckIn":
        return <CheckIn />;
      case "Tasks":
        return <Tasks />;
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      default:
        return <Dashboard />;
    }
  };

  return <div>{renderView()}</div>;
}
