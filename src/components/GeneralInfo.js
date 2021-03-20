import React from 'react'

function GeneralInfo(props) {
  const { title, items } = props.info

   let now = new Date()
   const age =now.getFullYear() - +items.birthYear

  //  const salary = monthly.items * hourly.items

  return (
    <section>
      <h2>{title}</h2>
      <p>name: {items.fullName}</p>
      <p>Date of birth: {items.birthYear}</p>
      <p>Vozrast: {age}</p>
      <p>Desired Position: {items.position}</p>
    </section>
  )
}

export default GeneralInfo
