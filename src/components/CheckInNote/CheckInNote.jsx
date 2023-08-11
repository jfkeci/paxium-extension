import Joi from 'joi';
import { useState } from 'react';
import CheckInNoteEditor from './CheckInNoteEditor';
import ValidationInput from '../Shared/ValidationInput';
import { FaFloppyDisk } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function CheckInNote() {
  const [checkInNote, setCheckInNote] = useState({
    template: null,
    title: '',
    body: '',
  });

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
          <div className="inline-flex rounded-md shadow-sm mt-2" role="group">
            <button
              type="button"
              className="px-3 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <FaFloppyDisk />
            </button>

            <button
              type="button"
              className="px-3 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>

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
