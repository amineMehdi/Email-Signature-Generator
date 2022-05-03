import React from 'react'
import TableColumn from '../components/Template/TableColumn'

type SocialIconProps = {
  icon: React.ReactNode,
  link: string,
  color: string,
}

function SocialIcon({ icon, link, color }: SocialIconProps) {
  if (link == ' ' || link == '' || link == null) return null
  return (
    <a href={link} style={{ display: 'block', borderRadius: '100%', backgroundColor: color, width: 'max-content', height: 'max-content', padding: '0.5rem' }}>
      {icon}
    </a>
  )
}

export default SocialIcon