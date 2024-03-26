import React from 'react';
import Greets from './components/Greets';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';

function App() {
  const personName = {
    first: 'adarsh',
    last: 'shanu'
  }
  const nameList = [
    {
      first: 'Adarsh',
      last: 'shanu',
    },
    {
      first: 'Elon',
      last: 'Musk',
    },
    {
      first: 'Rathan',
      last: 'Tata',
    }
  ]
  return (
    <div className="App">
      {/* <Greets name={'Adarsh'} messageCount={100} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status={'success'} />
      <Heading>PlaceHolder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo decapreo</Heading>
      </Oscar>
      <Greets name={'Adarsh'} isLoggedIn={true} /> */}
      <Button handleClick={(event, id) => {
        console.log('button clicked...', event);
        console.log(`your id is ${id}`);
      }} />
    </div>
  );
}

export default App;
