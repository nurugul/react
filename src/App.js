import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Title from './components/Title';
import './styles.scss'



function App() {
  const store = {
    lang: 'ru',
    titles: [
      {
        lang: 'ru',
        title:'resume',
      },
      {
        lang: 'en',
        title:'CV',
      },
    ],
    generalInfo: {
      title: 'Main Information',
      items: {
        fullName: 'Yun Aleks Denisovich',
        birthYear: 1990,
        position: 'Frontend Developer'
      },
    },
    education: {
      title: 'Obrazovanie',
      items: {
        university: 'KGTU',
        graduated: 2011,
      },
    },
    experience: {
      title: 'Opyt raboty',
      items: {
        company: 'Google',
        workingStart: 2012,
        workingEnd: 2020,
        skills: ['html', 'css', 'js'],
      },
    },
  };

  return (
    <CV store = {store}></CV>
  )
}
export default App
