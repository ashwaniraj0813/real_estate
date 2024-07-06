import React, { ChangeEvent, FC } from 'react';
import styles from './EditableInput.module.css';

interface EditableInputProps {
  isEditable: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string; // Optional prop to determine the type of input
}

const EditableInput: FC<EditableInputProps> = ({ isEditable, value, onChange, type }) => {
  return (
    <>
      {type === 'select' ? (
        <select
          className={`${styles.inputField} ${!isEditable ? styles.readOnly : ''}`}
          value={value}
          onChange={onChange}
          disabled={!isEditable}
        >
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
          <option value="Dealer">Dealer</option>
        </select>
      ) : (
        <input
          className={`${styles.inputField} ${!isEditable ? styles.readOnly : ''}`}
          type="text"
          value={value}
          onChange={onChange}
          readOnly={!isEditable}
        />
      )}
    </>
  );
};

export default EditableInput;
