import Message from "./Message";
import { messageStore } from "../../store/message.store";

export default function Messages() {
  const messages = messageStore((state) => state.messages);

  if (messages.length) {
    return (
      <div>
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}
