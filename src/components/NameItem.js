import {React, useEffect} from 'react';

function NameItem({ name, nameSetter }) {
  useEffect(() => {
    console.log(`${name} is in de DOM geplaatst`);
  }, [/** inital MOUNT **/]);
  return (
    <li>
      <h3>{name}</h3>
      <button
        type="button"
        onClick={() => nameSetter(name)}
      >
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;