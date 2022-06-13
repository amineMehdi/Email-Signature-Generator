import React from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import { Grid } from '@mantine/core'
import Editor from './Editor/Editor'
import InputElements from './Editor/InputElements'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function EditorContainer() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Grid grow>
          <Grid.Col span={4}>
              <InputElements/>
          </Grid.Col>
          <Grid.Col span={8}>
            <Editor />
          </Grid.Col>
        </Grid>
      </DndProvider>
    </Provider>
  )
}

export default EditorContainer