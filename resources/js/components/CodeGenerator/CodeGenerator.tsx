import React, {useState} from 'react'
import {Modal, Group, Button} from '@mantine/core'

function CodeGenerator() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Modal
        opened = {opened}
        onClose = {() => setOpened(false)}
        title = 'HTML Generated Code'
      >
        <Group>
          MM
        </Group>
      </Modal>
    </>
  )
}

export default CodeGenerator