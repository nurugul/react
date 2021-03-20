import React from 'react';
import Skill from "./Skill"

function Experience(props) {
  const { title, items } = props.info
  return (
    <section>
      <h2>{title}</h2>
      <p>Last place of job: {items.company}</p>
      <p>Years of work: {items.workingStart} - {items.workingEnd}</p>
      <h3>Skills:</h3>
      <ul>
       { items.skills.map((item) => {
         return <Skill skill ={item} />;
       })}
       </ul>
    </section>
  )
}

export default Experience
