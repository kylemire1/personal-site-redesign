import React from 'react';

import { FormControl } from '../styled/global';

const Input = ({ type, name, label, id, required, className }) => {
  return (
    <FormControl>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <TextArea
          name={name}
          id={id}
          required={required}
          className={className}
        />
      ) : (
        <TextInput
          name={name}
          id={id}
          required={required}
          className={className}
        />
      )}
    </FormControl>
  );
};

const TextInput = ({ name, id, className, required }) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className={className}
      required={required}
    />
  );
};

const TextArea = ({ name, id, className, required }) => {
  return (
    <textarea name={name} id={id} className={className} required={required} />
  );
};

export default Input;
