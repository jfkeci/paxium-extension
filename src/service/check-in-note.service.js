import axiosInstance from '../utils/config/axios.config';

export const getCheckInNoteById = async (
  checkInNoteId /* : string */,
) /* : Promise<Note | null> */ => {
  const res = await axiosInstance.get(`/api/checkInNotes/${checkInNoteId}`);

  return res.data?.data == res.data ?? null;
};

export const createCheckInNote = async (
  checkInNoteId /* : string */,
) /* : Promise<Note | null> */ => {
  const res = await axiosInstance.get(`/api/notes/${checkInNoteId}`);

  return res.data?.data == res.data ?? null;
};
