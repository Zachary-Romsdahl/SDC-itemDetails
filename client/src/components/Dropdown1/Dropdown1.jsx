/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown2 from '../Dropdown2/Dropdown2.jsx';
import {
  Box,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Title,
  Button1,
  Button2,
} from './Dropdown1.style.jsx';

const options = [
  'Select a size',
  'Small (5") inches ($50.00)',
  'Medium (6 1/2") inches [Sold out]',
  'Large (8") inches ($90.00)',
];

export default function Dropdown1(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const { product } = props;
  return (
    <Box>
      <Title>Size</Title>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || 'Select a size'}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
        <Dropdown2
          color={product.color}
        />
      </DropDownContainer>
      <Button1>Buy it now</Button1>
      <Button2>Add to cart</Button2>
    </Box>
  );
}
Dropdown1.defaultProps = {
  product: {},
};
Dropdown1.propTypes = {
  product: PropTypes.object,
};
