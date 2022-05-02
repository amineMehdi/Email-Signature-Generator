import React, { useEffect, useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Group, Text, Divider } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTextForm, updateTextForm } from './formSlice';

import { GrLinkedinOption, GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'

function Form() {
  const dispatch = useDispatch();

  const formSelector = useSelector(getTextForm);

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

  const socialFieldInputs = [
    {
      name: 'linkedIn',
      label: 'LinkedIn',
      placeholder: formSelector.linkedIn,
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
      linkedin: '',
      facebook: '',
      twitter: '',
      instagram: ''
    },
    // TODO Add validation

    // validate: {  
    //   email : (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    // }
  });

  const onTextFieldChange = (e: any, type: any) => {
    form.setFieldValue(type, e.target.value);
    dispatch(updateTextForm({ type, value: e.target.value }));
  }


  return (
    <Group grow={true}>
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

        <Group direction='column' grow={true}>
          <Divider size="md" label="Social Links" labelPosition='center' labelProps={{ size: 'lg' }} />
          {socialFieldInputs.map((field) => {
          return <TextInput
            key={field.name}
            mb="lg"
            label={field.label}
            placeholder={field.placeholder}
            {...form.getInputProps(field.name)}
            onChange={(e) => onTextFieldChange(e, field.name)}
          />
        })}

        </Group>

      </form>
    </Group>
  )
}

export default Form


{/* <TextInput mb="lg" label='First Name'   placeholder={formSelector.firstName} {...form.getInputProps('firstName')} onChange={(e) => onTextFieldChange(e, 'firstName')} /> */ }
{/* <TextInput mb="lg" label='Last Name'    placeholder={formSelector.lastName} {...form.getInputProps('lastName')} onChange={(e) => onTextFieldChange(e, 'lastName')} /> */ }
{/* <TextInput mb="lg" label='Email'        placeholder={formSelector.email} {...form.getInputProps('email')} onChange={(e) => onTextFieldChange(e, 'email')} /> */ }
{/* <TextInput mb="lg" label='Job'          placeholder={formSelector.job} {...form.getInputProps('job')} onChange={(e) => onTextFieldChange(e, 'job')} /> */ }
{/* <TextInput mb="lg" label='Address'      placeholder={formSelector.address} {...form.getInputProps('address')} onChange={(e) => onTextFieldChange(e, 'address')} /> */ }
{/* <TextInput mb="lg" label='Mobile Phone' placeholder={formSelector.mobilePhone} {...form.getInputProps('mobilePhone')} onChange={(e) => onTextFieldChange(e, 'mobilePhone')} /> */ }
{/* <TextInput mb="lg" label='Office Phone' placeholder={formSelector.officePhone} {...form.getInputProps('officePhone')} onChange={(e) => onTextFieldChange(e, 'officePhone')} /> */ }
{/* <TextInput mb="lg" label='Department'   placeholder={formSelector.department} {...form.getInputProps('department')} onChange={(e) => onTextFieldChange(e, 'department')} /> */ }
{/* <TextInput mb="lg" label='Company'      placeholder={formSelector.company} {...form.getInputProps('company')} onChange={(e) => onTextFieldChange(e, 'company')} /> */ }
{/* <TextInput mb="lg" label='Website URL'  placeholder={formSelector.websiteURL} {...form.getInputProps('websiteURL')} onChange={(e) => onTextFieldChange(e, 'websiteURL')} /> */ }
{/* <TextInput mb="lg" label='Bonus Field'  placeholder={formSelector.customField} {...form.getInputProps('customField')} onChange={(e) => onTextFieldChange(e, 'customField')} /> */ }


{/* <TextInput
            mb="lg"
            label='Linkedin'
            placeholder={formSelector.linkedin}
            {...form.getInputProps('linkedin')}
            onChange={(e) => onTextFieldChange(e, 'linkedin')}
            icon={<GrLinkedinOption />} />
          <TextInput
            mb="lg"
            label='Facebook'
            placeholder={formSelector.facebook}
            {...form.getInputProps('facebook')}
            onChange={(e) => onTextFieldChange(e, 'facebook')}
            icon={<GrFacebookOption/>} />
          <TextInput
            mb="lg"
            label='Twitter'
            placeholder={formSelector.twitter}
            {...form.getInputProps('twitter')}
            onChange={(e) => onTextFieldChange(e, 'twitter')} 
            icon={<GrTwitter/>}/>
          <TextInput
            mb="lg"
            label='Instagram'
            placeholder={formSelector.instagram}
            {...form.getInputProps('instagram')}
            onChange={(e) => onTextFieldChange(e, 'instagram')} 
            icon={<GrInstagram/>}/> */}