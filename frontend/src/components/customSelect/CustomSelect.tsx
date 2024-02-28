import React, { useState } from "react";
import {
  DropdownWrapper,
  DropdownButton,
  OptionList,
  Option,
} from "./CustomSelect.style";

type OptionType = {
  value: string;
  name: string;
};

type SelectProps = {
  value: string;
  onChange: (value: string, name: string) => void;
  required?: boolean;
  options: OptionType[];
};

const CustomSelect: React.FC<SelectProps> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (value: string, name: string) => {
    onChange(value, name);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.name : "Select an option"}
      </DropdownButton>
      {isOpen && (
        <OptionList>
          {options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleSelect(option.value, option.name)}
            >
              {option.name}
            </Option>
          ))}
        </OptionList>
      )}
    </DropdownWrapper>
  );
};

export default CustomSelect;
