import React from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import Title from './Title'

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
    </>
  )
}

export default CV
