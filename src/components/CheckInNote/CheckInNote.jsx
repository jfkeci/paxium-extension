import Joi from 'joi';
import { useState } from 'react';
import { FaFloppyDisk } from 'react-icons/fa6';
import { Button, Dropdown } from 'flowbite-react';
import CheckInNoteEditor from './CheckInNoteEditor';
import ValidationInput from '../Shared/ValidationInput';

export default function CheckInNote() {
  const [checkInNote, setCheckInNote] = useState({
    template: null,
    title: '',
    body: '',
  });

  const saveCheckInNote = () => {
    console.log(checkInNote);

    /**
     * Use zustand store to save the note
     */
  };

  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-4">
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
        </div>
        <div>
          <Button.Group className="mt-2">
            <Button color="gray" size="lg" onClick={() => saveCheckInNote()}>
              <FaFloppyDisk />
            </Button>
            <Dropdown color="gray" size="lg">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Button.Group>
        </div>
      </div>

      <CheckInNoteEditor
        config={{
          value: checkInNote.body,
          onUpdate: (newValue) => {
            setCheckInNote((prevData) => {
              return { ...prevData, body: newValue };
            });

            saveCheckInNote();
          },
        }}
      />
    </div>
  );
}
