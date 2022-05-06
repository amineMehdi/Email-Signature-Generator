import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTextForm, updateTextForm } from './formSlice';

function TextInputForm() {
  const dispatch = useDispatch();

  const formSelector = useSelector(getTextForm);

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
      department: '',
      websiteURL: '',
      customField: '',
    },
  });
  const textFieldInputs = [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: formSelector.firstName,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeholder: formSelector.lastName,
    }, {
      name: 'email',
      label: 'Email',
      placeholder: formSelector.email,
    }, {
      name: 'job',
      label: 'Job',
      placeholder: formSelector.job,
    }, {
      name: 'address',
      label: 'Address',
      placeholder: formSelector.address,
    }, {
      name: 'mobilePhone',
      label: 'Mobile Phone',
      placeholder: formSelector.mobilePhone,
    }, {
      name: 'officePhone',
      label: 'Office Phone',
      placeholder: formSelector.officePhone,
    }, {
      name: 'department',
      label: 'Department',
      placeholder: formSelector.department,
    }, {
      name: 'company',
      label: 'Company',
      placeholder: formSelector.company,
    }, {
      name: 'websiteURL',
      label: 'Website URL',
      placeholder: formSelector.websiteURL,
    }, {
      name: 'customField',
      label: 'Bonus Field',
      placeholder: formSelector.customField,
    }
  ]

  const onTextFieldChange = (e: any, type: any) => {
    form.setFieldValue(type, e.target.value);
    dispatch(updateTextForm({ type, value: e.target.value }));
  }

  return (
    <form>
      {textFieldInputs.map((field) => {
          return <TextInput
            key={field.name}
            mb="lg"
            label={field.label}
            placeholder={field.placeholder}
            {...form.getInputProps(field.name)}
            onChange={(e) => onTextFieldChange(e, field.name)}
          />
        })}
    </form>
  )
}

export default TextInputForm