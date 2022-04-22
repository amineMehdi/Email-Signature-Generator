import { Tabs } from '@mantine/core'
import React from 'react'

import { BsCursorText } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import {FaPaintBrush} from 'react-icons/fa'

import Form from '../Form/Form'
import ImagesInputContainer from './ImagesInputContainer'

function InputManager() {
  return (
    <Tabs variant='outline' tabPadding="xl">
      <Tabs.Tab label="Text" icon={<BsCursorText/>}>
        <Form/>
      </Tabs.Tab>
      <Tabs.Tab label="Image" icon={<FiImage/>}>
        <ImagesInputContainer/>
      </Tabs.Tab>
      <Tabs.Tab label="Style" icon={<FaPaintBrush/>}>
        Style
      </Tabs.Tab>
    </Tabs>
  )
}

export default InputManager