import Login from "../../../views/Login";
import Tasks from "../../../views/Tasks";
import Register from "../../../views/Register";
import Pomodorro from "../../../views/Pomodorro";
import Dashboard from "../../../views/Dashboard";
import { navigationStore } from "../../../store/navigation.store";

export default function ViewHolder() {
  const { currentView } = navigationStore();

  const renderView = () => {
    switch (currentView) {
      case "Dashboard":
        return <Dashboard />;
      case "Pomodorro":
        return <Pomodorro />;
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
