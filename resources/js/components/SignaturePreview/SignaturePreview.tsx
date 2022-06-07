import { Container, Grid, Group, Skeleton, Stack } from '@mantine/core'
import React from 'react'
import SignatureTemplate from '../../templates/SignatureTemplate'

function SignaturePreview() {
  return (
    <Group style={{
      height: '100%',
      width: '100%',
    }}
    position='center'
    align='start'
    >
      <SignatureTemplate/>
    </Group>
  )
}

export default SignaturePreview