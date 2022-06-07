import React from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import { Grid } from '@mantine/core'
function Editor() {
  return (
    <Provider store={store}>
      <Grid grow>
        <Grid.Col span={4}>
          {/* <InputElements/> */}
        </Grid.Col>
        <Grid.Col span={8}>
          {/* <EditorPreview/> */}
        </Grid.Col>
      </Grid>
    </Provider>
  )
}

export default Editor