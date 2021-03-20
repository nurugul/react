import React from 'react'

function Education(props) {
  const { title, items } = props.info
  return (
    <section>
      <h2>{title}</h2>
      <p>University: {items.university}</p>
      <p>Year of completion: {items.graduated}</p>

    </section>
  )
}

export default Education
