import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
`;

export const DropdownButton = styled.div`
  padding: 10px;
  border: 1px solid #6688cc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export const OptionList = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1000;
`;

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
