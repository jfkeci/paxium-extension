import {
  BsXSquareFill,
  BsShieldExclamation,
  BsFillInfoSquareFill,
} from "react-icons/bs";
import messageStore from "../../../store/message.store";

/* MessageComponentProps {
  key: number;
  message: AppMessage;
} */

export default function Message(props) {
  // eslint-disable-next-line react/prop-types
  const message = { ...props.message };

  const removeMessage = messageStore((state) => state.removeMessage);

  const messageIconByType = (type) => {
    switch (type) {
      case "warning":
        return <BsShieldExclamation />;
      case "error":
        return <BsShieldExclamation />;
      default:
        return <BsFillInfoSquareFill />;
    }
  };

  const messageClassByType = (type) => {
    switch (type) {
      case "warning":
        return "bg-orange-400 border-t-4 border-orange-500 rounded-b text-gray-600 px-4 py-3 shadow-md";
      case "error":
        return "bg-red-400 border-t-4 border-red-500 rounded-b text-gray-600 px-4 py-3 shadow-md";
      default:
        return "bg-teal-400 border-t-4 border-teal-500 rounded-b text-gray-600 px-4 py-3 shadow-md";
    }
  };

  return (
    <div
      className="m-2 cursor-pointer"
      onClick={() => removeMessage(message.id)}
    >
      <div className={messageClassByType(message.type)} role="message">
        <div className="flex">
          <div className="py-1">{messageIconByType(message.type)}</div>
          <div className="ml-auto">
            <p className="text-sm">{message.body ?? ""}</p>
          </div>
          <div className="py-1 ml-5 right-0">
            <BsXSquareFill />
          </div>
        </div>
      </div>
    </div>
  );
}
