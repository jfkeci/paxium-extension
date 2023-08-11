import Joi from 'joi';
import { useState } from 'react';
import CheckInNoteEditor from './CheckInNoteEditor';
import ValidationInput from '../Shared/ValidationInput';

export default function CheckInNote() {
  const [checkInNote, setCheckInNote] = useState({
    template: null,
    title: '',
    body: '',
  });

  return (
    <div>
      <ValidationInput
        config={{
          type: 'text',
          property: 'title',
          value: checkInNote.title,
          placeholder: 'Note title',
          onUpdate: (newValue) => {
            setCheckInNote((prevData) => {
              console.log('checkInNote', checkInNote);
              return { ...prevData, title: newValue };
            });
          },
          validationSchema: Joi.string().min(5).max(125).required(),
        }}
      />

      <CheckInNoteEditor
        config={{
          value: checkInNote.body,
          onUpdate: (newValue) => {
            setCheckInNote((prevData) => {
              return { ...prevData, body: newValue };
            });
          },
        }}
      />
    </div>
  );
}
