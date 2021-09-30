import { React, useEffect, useState } from 'react';
import NameItem from './components/NameItem';
import './App.css';


function App() {
  const [activeName, setActiveName] = useState('');


  useEffect(() => {

    if (!activeName) {
      console.log('We gaan beginnen');
    } else {
      console.log(`${activeName} wil graag een biertje bestellen`);


    }
  }, [activeName]);

  return (
    <>
      <h1>{activeName ? `${activeName} wil graag een biertje bestellen` : "We gaan beginnen"}</h1>
      <ul>
        <NameItem name="Henk" nameSetter={setActiveName} />
        <NameItem name="Piet" nameSetter={setActiveName} />
        <NameItem name="Jan" nameSetter={setActiveName} />
      </ul>
    </>
  );
}

export default App;
