import React from 'react'

import TableColumn from '../components/Template/TableColumn'
import TableGroup from '../components/Template/TableGroup'
import TableRow from '../components/Template/TableRow'
import TextField from '../components/Template/TextField'

import Spacer, { SpacerType, LinePosition } from '../components/Template/Spacer'
import { useSelector } from 'react-redux'
import { getForm } from '../components/Form/formSlice'

import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'

function SignatureTemplate() {
  const form = useSelector(getForm);
  return (
    <TableGroup>
      <TableRow>
        <TableColumn style={{ verticalAlign: LinePosition.Top }}>
          <TableGroup>
            <TableRow>
              <TableColumn >
                <img style={{
                  width: `130px`, // TODO: make this dynamic
                  height: '130px',
                  borderRadius: '100%',
                  objectFit: 'cover'
                }} src={form.profileImage} alt='profile image' />
              </TableColumn>
            </TableRow>
          </TableGroup>

          <Spacer type={SpacerType.Horizontal} space={20} />

          <TableGroup>
            <TableRow>
              <TableColumn style={{ textAlign: 'center' }}>
                <img style={{ 
                  backgroundColor: 'lightblue', 
                  width: '30px' 
                }} src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png' alt='linkedin' />
              </TableColumn>
            </TableRow>
          </TableGroup>
        </TableColumn>
        <Spacer type={SpacerType.Vertical} space={40}
          line={{
            color: 'red',
            width: 1,
            height: 10,
            position: LinePosition.Center
          }} />
        <TableColumn>
          <TableGroup>
            <TableRow>
              <TableColumn>
                <h3>{form.firstName} {form.lastName} </h3>
                <p>{form.job}</p>
              </TableColumn>
            </TableRow>
          </TableGroup>

          <Spacer type={SpacerType.Horizontal} line={{
            color: 'red',
            height: 1,
            position: LinePosition.Center
          }} space={20} />

          <TableGroup>
            <TextField icon={<BsFillTelephoneFill />} style={{
              height: '30px',
            }}> {form.phone} </TextField>
            <TextField icon={<GrMail />} style={{
              height: '30px',
            }}> {form.email} </TextField>
            <TextField icon={<FaRegAddressCard />} style={{
              height: '30px',
            }}> {form.address} </TextField>
          </TableGroup>
        </TableColumn>
      </TableRow>
    </TableGroup>
  )
}

export default SignatureTemplate