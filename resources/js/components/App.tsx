import React from 'react';
import Form from './Form/Form';
import SignaturePreview from './SignaturePreview/SignaturePreview';
import {Group, AppShell, Grid} from '@mantine/core';
import { Provider } from 'react-redux';
import store from '../store';
import InputManager from './InputManager/InputManager';

function App() {
    return (
      <Provider store={store}>
        <Grid grow >
          <Grid.Col span={4} sx={{}}>
            <InputManager/>
          </Grid.Col>
          <Grid.Col span={8} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <SignaturePreview/>
          </Grid.Col>
        </Grid>
      </Provider>
    )
}


export default App