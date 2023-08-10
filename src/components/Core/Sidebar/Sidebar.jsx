import {
  BsClockFill,
  BsFillHddStackFill,
  BsFillClipboard2PulseFill,
} from "react-icons/bs";
import { FaRegUser, FaSignInAlt } from "react-icons/fa";
import { viewStore } from "../../../store/view.store";

export default function Sidebar() {
  const { setView } = viewStore();

  return (
    <aside
      id="default-sidebar"
      aria-label="Sidebar"
      className="fixed top-0 left-0 z-40 w-40 h-screen transition-transform sm:translate-x-0"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setView("Dashboard")}
            >
              <BsFillClipboard2PulseFill size={25} />
              <span className="ml-3">Dashboard</span>
            </button>
          </li>
          <li>
            <button
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setView("CheckIn")}
            >
              <BsClockFill size={25} />
              <span className="flex-1 ml-3 whitespace-nowrap">Check In</span>
              {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span> */}
            </button>
          </li>
          <li>
            <button
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setView("Tasks")}
            >
              <BsFillHddStackFill size={25} />
              <span className="flex-1 ml-3 whitespace-nowrap">Tasks</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setView("Login")}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaSignInAlt size={25} />
              <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setView("Register")}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaRegUser size={25} />
              <span className="flex-1 ml-3 whitespace-nowrap">Register</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
