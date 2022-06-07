import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTextForm, initialState, updateTextForm } from './formSlice';

import { GrLinkedinOption, GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function SocialInputForm() {
  const dispatch = useDispatch();

  const formSelector = useSelector(getTextForm);

  const socialFieldInputs = [
    {
      name: 'linkedin',
      label: 'LinkedIn',
      placeholder: formSelector.linkedin,
      icon: <GrLinkedinOption />,
    },
    {
      name: 'facebook',
      label: 'Facebook',
      placeholder: formSelector.facebook,
      icon: <GrFacebookOption />,
    }, {
      name: 'instagram',
      label: 'Instagram',
      placeholder: formSelector.instagram,
      icon: <GrInstagram />,
    }, {
      name: 'twitter',
      label: 'Twitter',
      placeholder: formSelector.twitter,
      icon: <GrTwitter />,
    }
  ]

  const form = useForm({
    initialValues: {
      linkedin: '',
      facebook: '',
      twitter: '',
      instagram: ''
    },
  });

  const onTextFieldChange = (e: any, type: any) => {
    form.setFieldValue(type, e.target.value);
    dispatch(updateTextForm({ type, value: e.target.value }));
  }

  useEffect(()=> {
    socialFieldInputs.forEach((inputObj : any) => {
      if(formSelector[inputObj.name] !== initialState.textForm[inputObj.name]) {
        form.setFieldValue(inputObj.name, formSelector[inputObj.name]);
      }
    });
  }, []);

  return (
    <form>
      {socialFieldInputs.map((field) => {
        return <TextInput
          key={field.name}
          mb="lg"
          label={field.label}
          placeholder={field.placeholder}
          {...form.getInputProps(field.name)}
          onChange={(e) => onTextFieldChange(e, field.name)}
          icon={field.icon}
        />
      })}
    </form>
  )
}

export default SocialInputForm