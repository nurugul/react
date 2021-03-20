import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import Title from './Title'
import Salary from './Salary'

function CV(props) {
  const store = props.store;
  const {title: intlTitle = "CV" } = 
  store.titles.find((title) => title.lang === store.lang) || {};

  return (
    <>
      <Title>{intlTitle}</Title>

      <GeneralInfo info={store.generalInfo}></GeneralInfo>
      <Education info={store.education}></Education>
      <Experience info={store.experience}></Experience>
      <Salary info={store.salary}></Salary>

    </>
  )
}

export default CV
