import React, { useState } from 'react'
import { ColorInput, Container, Group, Text } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux';
import { getStyleForm, updateStyleForm } from '../Form/formSlice';


const tinyColor = require('tinycolor2');

function StyleInputContainer() {
  const dispatch = useDispatch();
  const formSelector = useSelector(getStyleForm);

  const [themeColor, setThemeColor] = useState(formSelector.themeColor);
  const [textColor, setTextColor] = useState(formSelector.textColor);

  const onColorChange = (value: string, type: any, setColor: any) => {
    setColor(value);
    dispatch(updateStyleForm({ type, value }));
  }

  const colorInputs = [
    {
      label: 'Theme Color',
      color: themeColor,
      onChange: (value: string) => onColorChange(value, 'themeColor', setThemeColor),
    },
    {
      label: 'Text Color',
      color: textColor,
      onChange: (value: string) => onColorChange(value, 'textColor', setTextColor),
    }

  ]
  return (
    <>
      <Text>Style</Text>
      <Container>
      {colorInputs.map((input, index) => {
        return (
          
            <Group 
              key={index}
              sx={{
                backgroundColor: input.color,
                borderRadius: '15px',
                color: tinyColor(input.color).isDark() ? 'white' : 'black',
              }}
              position='apart'
              p="lg"
              mb="lg">
              <Text>
                {input.label}
              </Text>
              <ColorInput
                placeholder='Color'
                disallowInput
                value={input.color}
                onChange={input.onChange}
                swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
                swatchesPerRow={7}
              />
            </Group>
          
        )
      })}
      </Container>
    </>
  )
}

export default StyleInputContainer