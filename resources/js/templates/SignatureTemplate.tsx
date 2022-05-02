import React from 'react'

import TableColumn from '../components/Template/TableColumn'
import TableGroup from '../components/Template/TableGroup'
import TableRow from '../components/Template/TableRow'
import TextField from '../components/Template/TextField'

import Spacer, { SpacerType, LinePosition } from '../components/Template/Spacer'
import { useSelector } from 'react-redux'
import { getTextForm, getStyleForm, getImageForm } from '../components/Form/formSlice'

import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { GrLinkedinOption, GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'
import { BsLink45Deg } from 'react-icons/bs'

import SocialIcon from './SocialIcon'

enum Tags {
  P,
  H1,
  H3,
  DIV
}
function SignatureTemplate() {
  const textForm = useSelector(getTextForm);
  const styleForm = useSelector(getStyleForm);
  const imageForm = useSelector(getImageForm);

  const isEmptyField = (field: string) => {
    return field == undefined || field == null || field.trim() === '';
  }
  const parseMultipleFields = (firstField: string, secondField: string, tag: Tags = Tags.P, separator: string = "") => { // TODO : change it to a function that takes more than two fields
    if (isEmptyField(firstField) && isEmptyField(secondField)) {
      return null;
    } else if (isEmptyField(firstField)) {
      return field(secondField, tag);
    } else if (isEmptyField(secondField)) {
      return field(firstField, tag);
    }
    return field([firstField, separator, secondField].join(" "), tag);
  }

  const field = (field: string, type: Tags) => {
    if (isEmptyField(field)) {
      return null;
    }
    switch (type) {
      case Tags.P:
        return (<p>{field}</p>)
      case Tags.H1:
        return (<h1>{field}</h1>)
      case Tags.H3:
        return (<h3>{field}</h3>)
      case Tags.DIV:
        return (<div>{field}</div>)
      default:
        return (<p>{field}</p>)
    }
  }

  const ProfileImage = () => {
    return (
      <TableRow>
        <TableColumn >
          <img style={{
            maxWidth: '130px', // TODO: make this dynamic
            maxHeight: '130px',
            borderRadius: '100%',
            objectFit: 'cover'
          }} src={imageForm.profileImage} alt='profile image' />
        </TableColumn>
      </TableRow>
    )
  }

  const CompanyLogo = () => {
    return (
      <TableRow>
        <TableColumn>
          <img style={{
            maxWidth: '130px',
          }} src={imageForm.companyLogo} />
        </TableColumn>
      </TableRow>
    )
  }

  const SocialIcons = () => {
    return (
      <TableRow>
        <SocialIcon icon={<GrLinkedinOption size={20} color="white" />} link={textForm.linkedIn} color='#0077B5' />

        <Spacer type={SpacerType.Vertical} space={10} />

        <SocialIcon icon={<GrFacebookOption size={20} color="white" />} link={textForm.facebook} color='#0077B5' />

        <Spacer type={SpacerType.Vertical} space={10} />

        <SocialIcon icon={<GrInstagram size={20} color="white" />} link={textForm.instagram} color='#0077B5' />

        <Spacer type={SpacerType.Vertical} space={10} />

        <SocialIcon icon={<GrTwitter size={20} color="white" />} link={textForm.twitter} color='#0077B5' />
      </TableRow>
    )
  }

  const TextFormFields = () => {
    return (
      <TableGroup>
        <TableRow>
          <TableColumn>
            {parseMultipleFields(textForm.firstName, textForm.lastName, Tags.H3, " ")}
            {field(textForm.job, Tags.P)}
            {parseMultipleFields(textForm.department, textForm.company, Tags.P, "|")}
            {field(textForm.customField, Tags.P)}
          </TableColumn>
        </TableRow>
      </TableGroup>
    )
  }

  const ContactInfoFields = () => {
    return (
      <TableGroup>
        { }
        <TextField icon={<BsFillTelephoneFill />} style={{
          height: '30px',
        }}> {parseMultipleFields(textForm.mobilePhone, textForm.officePhone, Tags.P, "|")} </TextField>
        <TextField icon={<GrMail />} style={{
          height: '30px',
        }}> {textForm.email} </TextField>
        <TextField icon={<FaRegAddressCard />} style={{
          height: '30px',
        }}> {textForm.address} </TextField>
        <TextField icon={<BsLink45Deg />} style={{
          height: '30px',
        }}> {textForm.websiteURL} </TextField>
      </TableGroup>
    )
  }
  return (
    <TableGroup>
      <TableRow>
        <TableColumn style={{ verticalAlign: LinePosition.Top }}>
          <TableGroup>
            <ProfileImage />
            <CompanyLogo />
          </TableGroup>
          {[textForm.facebook, textForm.instagram, textForm.twitter, textForm.linkedIn]
          .every(isEmptyField) 
          ? null 
          : (
            <>
          <Spacer type={SpacerType.Horizontal} space={20} />
          <TableGroup>
            <SocialIcons /> 
          </TableGroup>
          </>
          )}
        </TableColumn>

        <Spacer type={SpacerType.Vertical} space={40}
          line={{
            color: 'red',
            width: 1,
            height: 10,
            position: LinePosition.Center
          }} />

        <TableColumn>
          <TextFormFields />
          <Spacer type={SpacerType.Horizontal} line={{
            color: 'red',
            height: 1,
            position: LinePosition.Center
          }} space={20} />

          <ContactInfoFields />
        </TableColumn>
      </TableRow>
    </TableGroup>
  )
}

export default SignatureTemplate