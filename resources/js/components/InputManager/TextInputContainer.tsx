import React from 'react'
import { Tabs } from '@mantine/core'
import { BsCursorText } from 'react-icons/bs'
import { IoMdShare } from 'react-icons/io'

import TextInputForm from '../Form/TextInputForm';
import SocialInputForm from '../Form/SocialInputForm';


function TextInputContainer() {
  return (
    <>
      <Tabs variant='pills' tabPadding="xl" position='center'>
        <Tabs.Tab label="Text" icon={<BsCursorText/>}>
          <TextInputForm/>
        </Tabs.Tab>

        <Tabs.Tab label="Social" icon={<IoMdShare/>}>
          <SocialInputForm/>
        </Tabs.Tab>
      </Tabs>
    </>
  )
}

export default TextInputContainer