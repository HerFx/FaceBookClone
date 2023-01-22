import React from 'react'

export default function Sponsore_card({img, title, site}) {
  return (
    <div>
        <img src={img} alt = {title} />
        <h4>{title}</h4>
        <h4>{site}</h4>
    </div>
  )
}
