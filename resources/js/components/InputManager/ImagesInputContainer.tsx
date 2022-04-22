import { Group, TextInput, Text, Switch } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';

import { BsLink45Deg } from 'react-icons/bs';
import { BsImageFill } from 'react-icons/bs'

import { useToggle } from '@mantine/hooks';
import { updateForm } from '../Form/formSlice';

import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function ImagesInputContainer() {
  const form = useForm({
    initialValues: {
      profileImage: ''
    }
  })

  const dispatch = useDispatch();
  const [imageInput, setImageInput] = useToggle('link', ['link', 'image']);
  const onImageLink = (value: any, type: String) => {
    if (value) {
      dispatch(updateForm({ type, value }));
    }
  }

  const dropzoneChildren = (status: DropzoneStatus) => (
    <Group position="center" spacing="xl">
      <BsImageFill size={50} style={{ color: '#000' }} />
    </Group>
  )

  const ImageDropZone = (
    <>
      <Dropzone
        style={{ border: '1px solid #ccc' }}
        onDrop={(file) => onImageLink(URL.createObjectURL(file[0]), 'profileImage')}
        onReject={(file) => console.log('rejected files', file)} // TODO : launch a notification to the user
        maxSize={3 * 1024 * 1024}
        accept={IMAGE_MIME_TYPE}
        multiple={false}
      >
        {(status) => dropzoneChildren(status)}
      </Dropzone>
    </>
  )

  const ImageLinkInput = (
    <TextInput
      {...form.getInputProps("profileImage")}
      placeholder="Image Link"
      icon={<BsLink45Deg size={20} />}
      onChange={(e) => onTextFieldChange(e, 'profileImage')}
    >
    </TextInput>
  )

  return (
    <>
      <Group direction="column">
        <Group position='apart'>
          <Text>Image</Text>
          <Switch onChange={() => setImageInput()}></Switch>
        </Group>
        {imageInput == 'image' ? ImageDropZone : ImageLinkInput}
      </Group>
      {/* <ImageInput name="Profile Picture"/>
      <ImageInput name="Company Logo"/> */}

    </>
  )
}

export default ImagesInputContainer