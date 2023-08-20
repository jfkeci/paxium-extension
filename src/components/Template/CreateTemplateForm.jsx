import Joi from 'joi';
import { useState } from 'react';
import TemplateEditor from './TemplateEditor';
import ValidationInput from '../Shared/ValidationInput';

export default function Template() {
  const [template, setTemplate] = useState({
    name: '',
    body: '',
  });

  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-4">
          <ValidationInput
            config={{
              type: 'text',
              property: 'name',
              value: template.name,
              placeholder: 'Template name',
              onUpdate: (newValue) => {
                setTemplate((prevData) => {
                  console.log('template', template);
                  return { ...prevData, name: newValue };
                });
              },
              validationSchema: Joi.string().min(5).max(125).required(),
            }}
          />
        </div>
      </div>

      <TemplateEditor
        config={{
          value: template.body,
          onUpdate: (newValue) => {
            setTemplate((prevData) => {
              return { ...prevData, body: newValue };
            });
          },
        }}
      />
    </div>
  );
}
