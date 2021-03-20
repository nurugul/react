import React from 'react'

function Salary(props) {
  const { title, items } = props.info

  return (
    <section>
      <h2>{title}</h2>
      <p>monthly: {items.monthly}</p>
      <p>hourly: {items.monthly / 160}</p>

    </section>
  )
}

export default Salary
