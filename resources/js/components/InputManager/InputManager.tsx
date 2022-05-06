import { Tabs } from '@mantine/core'
import React from 'react'

import { BsCursorText } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import {FaPaintBrush} from 'react-icons/fa'

import ImagesInputContainer from './ImagesInputContainer'
import TextInputContainer from './TextInputContainer'
import StyleInputContainer from './StyleInputContainer'

function InputManager() {
  return (
    <Tabs variant='outline' tabPadding="xl">
      <Tabs.Tab label="Text" icon={<BsCursorText/>}>
        <TextInputContainer/>
      </Tabs.Tab>
      <Tabs.Tab label="Image" icon={<FiImage/>}>
        <ImagesInputContainer/>
      </Tabs.Tab>
      <Tabs.Tab label="Style" icon={<FaPaintBrush/>}>
        <StyleInputContainer/>
      </Tabs.Tab>
    </Tabs>
  )
}

export default InputManager