import React, { ChangeEvent, FC } from 'react';
import styles from './EditableInput.module.css';

interface EditableInputProps {
  isEditable: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EditableInput: FC<EditableInputProps> = ({ isEditable, value, onChange }) => {
  return (
    <input
      className={`${styles.inputField} ${!isEditable ? styles.readOnly : ''}`}
      type="text"
      value={value}
      onChange={onChange}
      readOnly={!isEditable}
    />
  );
};

export default EditableInput;
