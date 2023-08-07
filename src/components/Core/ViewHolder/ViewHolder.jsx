import Tasks from "../../../views/Tasks";
import Dashboard from "../../../views/Dashboard";
import Pomodorro from "../../../views/Pomodorro";
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
      default:
        return <Dashboard />;
    }
  };

  return <div>{renderView()}</div>;
}
