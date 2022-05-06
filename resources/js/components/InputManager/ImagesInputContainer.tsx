import { Group, TextInput, Text, Switch, Container } from '@mantine/core'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';

import { BsLink45Deg } from 'react-icons/bs';
import { BsImageFill } from 'react-icons/bs'

import { useToggle } from '@mantine/hooks';
import { updateImageForm } from '../Form/formSlice';

import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function ImagesInputContainer() {
  const form = useForm({
    initialValues: {
      profileImage: '',
      companyLogo: '',
      customCTA: ''
    }
  })

  const dispatch = useDispatch();
  const [profileImageInput, setProfileImageInput] = useToggle('link', ['link', 'image']);
  const [companyLogoInput,  setCompanyLogoInput]  = useToggle('link', ['link', 'image']);
  const [customCTAInput,    setCustomCTAInput]    = useToggle('link', ['link', 'image']);

  const onImageLink = (value: any, type: any) => { // TODO : do not dispatch on every keystroke 
    form.setFieldValue(type, value);
    if (value) {
      dispatch(updateImageForm({ type, value }));
    }
  }

  const dropzoneChildren = (status: DropzoneStatus) => (
    <Group position="center" spacing="xl">
      <BsImageFill size={50} style={{ color: '#000' }} />
    </Group>
  )

  const ImageDropZone = (props: any) => {
    return (
      <Dropzone
        style={{ border: '1px solid #ccc' }}
        onDrop={(file) => onImageLink(URL.createObjectURL(file[0]), props.type)}
        onReject={(file) => console.log('rejected files', file)} // TODO : launch a notification to the user
        maxSize={3 * 1024 * 1024}
        accept={IMAGE_MIME_TYPE}
        multiple={false}
      >
        {(status) => dropzoneChildren(status)}
      </Dropzone>
    )
  }

  const ImageLinkInput = (props: any) => {
    return (
      <TextInput
        {...form.getInputProps(props.type)}
        placeholder="Image Link"
        icon={<BsLink45Deg size={20} />}
        onChange={(e) => onImageLink(e.target.value, props.type)}
      >
      </TextInput>
    )
  }

  const ImageSection = (props: any) => { // TODO Make it work
    return (
      <Container px={0} mb="lg">
        <Group position='apart' mb="lg">
          <Text>{props.label}</Text>
          <Switch onChange={props.setSwitch}></Switch>
        </Group>
        {props.switch === 'image' ? <ImageDropZone type={props.fieldName} /> : <ImageLinkInput type={props.fieldName} />}
      </Container>
    )
  }
  return (
    <>
      <Container>
        <Container px={0} mb="lg">
          <Group position='apart' mb="lg">
            <Text>Image</Text>
            <Switch onChange={() => setProfileImageInput()}></Switch>
          </Group>
          {profileImageInput === 'image' ? <ImageDropZone type="profileImage" /> : <ImageLinkInput type="profileImage" />}
        </Container>

        <Container px={0} mb="lg">
          <Group position='apart' mb="lg">
            <Text>Company Logo</Text>
            <Switch onChange={() => setCompanyLogoInput()}></Switch>
          </Group>
          {companyLogoInput === 'image' ? <ImageDropZone type="companyLogo" /> : <ImageLinkInput type="companyLogo" />}
        </Container>

        <Container px={0} mb="lg">
          <Group position='apart' mb="lg">
            <Text>Custom CTA</Text>
            <Switch onChange={() => setCustomCTAInput()}></Switch>
          </Group>
          {customCTAInput === 'image' ? <ImageDropZone type="customCTA" /> : <ImageLinkInput type="customCTA" />}
        </Container>

      </Container>

    </>
  )
}

export default ImagesInputContainer