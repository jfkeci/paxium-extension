import { create } from "zustand";

/* NewMessage {
  body?: string | null;
  type?: AppMessageType;
} */

/* AppMessage {
  id: number;
  body?: string | null;
  type?: AppMessageType;
} */

/* MessageStore {
  messages: AppMessage[];
  addMessage: (message: NewMessage) => void;
  removeMessage: (id: number) => void;
  clearMessages: () => void;
} */

export const messageStore = create((set) => ({
  messages: [],
  addMessage: (message) => {
    set((state) => {
      const id = state.messages.length
        ? Math.max(...state.messages.map((m) => m.id)) + 1
        : 1;

      setTimeout(() => {
        state.removeMessage(id);
      }, 5000);

      if (
        !state.messages.some(
          (sa) => sa.body != message.body && sa.type != message.type
        )
      ) {
        return {
          messages: [
            ...state.messages,
            { id, ...message, type: message.type ?? "success" },
          ],
        };
      }

      return state.messages;
    });
  },
  removeMessage: (id) =>
    set((state) => ({ messages: state.messages.filter((m) => m.id !== id) })),
  clearMessages: () => set(() => ({ messages: [] })),
}));
