import React from 'react'
import TableColumn from '../components/Template/TableColumn'
import TableGroup from '../components/Template/TableGroup'
import TableRow from '../components/Template/TableRow'
import TextField from '../components/Template/TextField'
import Spacer, { SpacerType, LinePosition } from '../components/Template/Spacer'

function SignatureTemplate() {
  return (
    <TableGroup>
      <TableRow>
        <TableColumn style={{verticalAlign: LinePosition.Top}}>
          <TableGroup>
            <TableRow>
              <TableColumn >
                <img style={{width: `130px`}} src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Diamond&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Tanned" alt='profile image' />
              </TableColumn>
            </TableRow>
            <Spacer type={SpacerType.Horizontal} space={20}/>
            <TableRow>
              <TableColumn style={{ textAlign: 'center' }}>
                <img style={{backgroundColor : 'lightblue'}} src='https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png' alt='linkedin' />
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
                <h3>EL-Mehdi Amine</h3>
                <p>Developpeur</p>
                <p>Master | Boostcom</p>
              </TableColumn>
            </TableRow>
          </TableGroup>

          <Spacer type={SpacerType.Horizontal} line={{
            color: 'red',
            height: 1,
            position: LinePosition.Center
          }} space={20} />

          <TableGroup>
            <TableRow>
              <TableColumn>
                <TextField icon={"1"}> 0 6 20 21 73 25 </TextField>
                <TextField icon={"2"}> mehdi1915@gmail.com </TextField>
                <TextField icon={"3"}> boostcom.fr </TextField>
                <TextField icon={"4"}> 2 Boulevard du docteur calmette, 59800 Lille </TextField>

              </TableColumn>
            </TableRow>
          </TableGroup>
        </TableColumn>
      </TableRow>
    </TableGroup>
  )
}

export default SignatureTemplate