import React from 'react'

import TableColumn from '../components/TemplateComponents/TableColumn'
import TableGroup  from '../components/TemplateComponents/TableGroup'
import TableRow    from '../components/TemplateComponents/TableRow'
import TextField   from '../components/TemplateComponents/TextField'

import Spacer, { SpacerType, LinePosition } from '../components/TemplateComponents/Spacer'
import { useSelector } from 'react-redux'
import { getTextForm, getStyleForm, getImageForm } from '../components/Form/formSlice'

import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { GrLinkedinOption, GrFacebookOption, GrInstagram, GrTwitter } from 'react-icons/gr'
import { BsLink45Deg } from 'react-icons/bs'

import SocialIcon from '../components/TemplateComponents/SocialIcon'

enum Tags {
  P,
  H1,
  H3,
  DIV
}
let tinyColor = require('tinycolor2');

function SignatureTemplate() {
  const textForm = useSelector(getTextForm);
  const styleForm = useSelector(getStyleForm);
  const imageForm = useSelector(getImageForm);

  const themeColor = styleForm.themeColor;
  const textColor = styleForm.textColor;
  const linkColor = styleForm.linkColor;

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

  const field = (field: string, type: Tags = Tags.P) => {
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
          <img
          style={{
            maxWidth: '130px', // TODO: make this dynamic
            maxHeight: '130px',
            borderRadius: '100%',
            objectFit: 'cover'
          }} 
          src={imageForm.profileImage} 
          alt='profile image' />
        </TableColumn>
      </TableRow>
    )
  }

  const CompanyLogo = () => {
    if (isEmptyField(imageForm.companyLogo)) return null
    return (
      <TableRow>
        <TableColumn>
          <img 
          style={{
            maxWidth: '130px',
          }} 
          src={imageForm.companyLogo} />
        </TableColumn>
      </TableRow>
    )
  }

  const SocialIcons = () => {
    const socialIcons = [
      {
        field: textForm.facebook,
        icon: <GrFacebookOption size={20} color={tinyColor(linkColor).isDark() ? 'white': 'black'} />,
      },
      {
        field: textForm.instagram,
        icon: <GrInstagram size={20} color={tinyColor(linkColor).isDark() ? 'white': 'black'} />,
      },
      {
        field: textForm.twitter,
        icon: <GrTwitter size={20} color={tinyColor(linkColor).isDark() ? 'white': 'black'} />,
      },
      {
        field: textForm.linkedin,
        icon: <GrLinkedinOption size={20} color={tinyColor(linkColor).isDark() ? 'white': 'black'} />,
      }
    ]
    const availableSocialFields = socialIcons.filter(field => !isEmptyField(field.field))

    if (availableSocialFields.length == 1) {
      return (
        <TableColumn>
          <SocialIcon icon={availableSocialFields[0].icon} link={availableSocialFields[0].field} color={linkColor} />
        </TableColumn>
      )
    }
    return (
      <>
        {availableSocialFields.map((socialField, index) => {
          if (index == availableSocialFields.length - 1) {
            return (
              <TableColumn key={socialField.field}>
                <SocialIcon icon={socialField.icon} link={socialField.field} color={linkColor} />
              </TableColumn>
            )
          }
          return (
            <React.Fragment key={socialField.field}>
              <TableColumn >
                <SocialIcon icon={socialField.icon} link={socialField.field} color={linkColor} />
              </TableColumn>
              <Spacer type={SpacerType.Vertical} space={10} />
            </React.Fragment>
          )
        })}
      </>
    )
  }

  const TextFormFields = () => {
    return (
      <TableGroup>
        <TableRow>
          <TableColumn style={{color: textColor}}>
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
    const contactFields = [
      {
        field: parseMultipleFields(textForm.mobilePhone, textForm.officePhone, Tags.P, "|"),
        textColor,
        icon: <BsFillTelephoneFill color={themeColor} size={20}/>
      },
      {
        field: field(textForm.email),
        textColor,
        icon: <GrMail color={themeColor} size={20}/>
      },
      {
        field: field(textForm.address),
        textColor,
        icon: <FaRegAddressCard color={themeColor} size={20}/>
      },
      {
        field: field(textForm.websiteURL),
        textColor,
        icon: <BsLink45Deg color={themeColor} size={20}/>
      }
    ]
    return (
      <TableGroup>
        {contactFields.map((contactField, index) => {
          return (
            <TextField 
              key={index}
              icon={contactField.icon}
              color={contactField.textColor}
              style = {{
                height: '30px',
              }}
              >
              {contactField.field}
            </TextField>
          )
        })}
      </TableGroup>
    )
  }

  const CustomCTA = () => {
    if (isEmptyField(imageForm.customCTA)) return null
    return (
      <TableRow>
        <TableColumn>
          <img src={imageForm.customCTA} alt='custom CTA' />
        </TableColumn>
      </TableRow>
    )
  }

  return (
    <TableGroup>
      <TableRow>
        <TableColumn style={{ verticalAlign: LinePosition.Top }}>
          <TableGroup>
            <ProfileImage />
            <CompanyLogo />

            {[textForm.facebook, textForm.instagram, textForm.twitter, textForm.linkedin]
              .every(isEmptyField)
              ? null
              : (
                <>
                  <Spacer type={SpacerType.Horizontal} space={20} />
                  <TableRow>
                    <TableColumn style={{ textAlign: 'center' }}>
                      <TableGroup style={{ display: 'inline-block' }}>
                        <TableRow>
                          <SocialIcons />
                        </TableRow>
                      </TableGroup>
                    </TableColumn>
                  </TableRow>
                </>
              )}
          </TableGroup>
        </TableColumn>

        <Spacer type={SpacerType.Vertical} space={40}
          line={{
            color: themeColor,
            width: 1,
            height: 10,
            position: LinePosition.Center
          }} />

        <TableColumn>
          <TextFormFields />
          <Spacer type={SpacerType.Horizontal} line={{
            color: themeColor,
            height: 1,
            position: LinePosition.Center
          }} space={20} />

          <ContactInfoFields />
        </TableColumn>
      </TableRow>
      <CustomCTA />
    </TableGroup>
  )
}

export default SignatureTemplate