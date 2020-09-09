import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Title,
} from './Dropdown2.style.jsx';

export default function Dropdown2(props) {
  const options = props.color[0];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Wrapper>
      <Title>Primary color</Title>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || 'Select a color'}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem
                  onClick={onOptionClicked(
                    option.charAt(0).toUpperCase() + option.slice(1)
                  )}
                  key={Math.random()}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Wrapper>
  );
}
