import { useState } from 'react';

/* ValidationInputProps {
  config: {
    property: string;
    label?: string;
    value: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    validationSchema: Joi.Schema;
    onUpdate: (newValue: string) => void;
    customValidationMessage?: string;
  };
} */

export default function ValidationInput(props /* ValidationInputProps */) {
  // eslint-disable-next-line react/prop-types
  const config = { ...props.config };

  const [validationError, setValidationError] = useState('');

  const validate = (value) => {
    const { error } = config.validationSchema.validate(value);

    setValidationError(
      error
        ? error.details[0].message.replace(
            '"value"',
            config.label ?? config.property,
          )
        : '',
    );
  };

  return (
    <div>
      <div className="mb-4">
        <div>
          <label
            className={
              validationError
                ? 'block mb-2 text-sm font-medium text-red-700 dark:text-red-500'
                : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            }
          >
            {config.label ?? ''}
          </label>
          <input
            id={`app-input-${config.property}`}
            type={config.type ?? 'text'}
            name={config.property}
            className={
              validationError
                ? 'bg-red-50 border border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500'
                : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            }
            value={config.value}
            placeholder={config.placeholder}
            onChange={(e) => {
              validate(e.target.value);
              config.onUpdate(e.target.value);
            }}
            required
          />
          {validationError ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {config.type === 'password'
                ? config.customValidationMessage ?? validationError
                : validationError}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
