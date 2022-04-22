import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, Text, Switch, Image } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { addForm, getForm, updateForm } from './formSlice';

import formStyle from './Form.module.css';

function Form() {
  const dispatch = useDispatch();
  const submitForm = (values: any) => {
    dispatch(addForm(values));
  }

  const formSelector = useSelector(getForm);

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      job: '',
      mobilePhone: '',
      officePhone: '',
      address: '',
      company: '',
      linkedin: '',
      facebook: '',
      twitter: '',
      instagram: ''
    },

    // validate: {
    //   email : (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    // }
  });

  const onTextFieldChange = (e: any, type: any) => {
    form.setFieldValue(type, e.target.value);
    dispatch(updateForm({ type, value: e.target.value }));
  }




  return (
    <Group grow={true}>
      <form onSubmit={form.onSubmit(submitForm)} className={formStyle.form}>
        <TextInput label='First Name' placeholder={formSelector.firstName} {...form.getInputProps('firstName')} onChange={(e) => onTextFieldChange(e, 'firstName')} />
        <TextInput label='Last Name'  placeholder={formSelector.lastName } {...form.getInputProps('lastName')}  onChange={(e) => onTextFieldChange(e, 'lastName')} />
        <TextInput label='Email'      placeholder={formSelector.email    } {...form.getInputProps('email')}     onChange={(e) => onTextFieldChange(e, 'email')} />
        <TextInput label='Job'        placeholder={formSelector.job      } {...form.getInputProps('job')}       onChange={(e) => onTextFieldChange(e, 'job')} />
        <TextInput label='Phone'      placeholder={formSelector.address  } {...form.getInputProps('mobilePhone')}     onChange={(e) => onTextFieldChange(e, 'phone')} />

      </form>
    </Group>
  )
}

export default Form