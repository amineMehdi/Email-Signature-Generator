import React from 'react'
import TableColumn from '../components/Template/TableColumn'

type SocialIconProps = {
  icon: React.ReactNode,
  link: string,
  color: string,
}

function SocialIcon({ icon, link, color }: SocialIconProps) {
  // if (link == undefined || link.trim() == '' || link == null) return null
  return (
    <TableColumn>
      <a href={link} style={{ display: 'block', borderRadius: '100%', backgroundColor: color, width: 'max-content', height: 'max-content', padding: '0.5rem' }}>
        {icon}
      </a>
    </TableColumn>
  )
}

export default SocialIcon