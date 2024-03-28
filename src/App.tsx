import React from 'react';
import Greets from './components/Greets';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import Counter from './components/state/Counter';
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generic/List';
import RandomNumber from './components/restrictions/RandomNumber';
import Toast from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import CustomComponent from './components/html/CustomComponent';
import Text from './components/polimorphic/Text';

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
      {/* <Button handleClick={(event, id) => {
        console.log('button clicked...', event);
        console.log(`your id is ${id}`);
      }} />
      <Input value='' handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
      {/* <LoggedIn /> */}
      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <DomRef />
      <MutableRef /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List items={['superman', 'spiderman', 'batman']} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={200} isZero  /> */}
      {/* <Toast position='right-top' /> */}
      {/* <CustomButton variant='secondary' onClick={() => console.log('Clicked')}>Primary Button</CustomButton> */}
      {/* <CustomComponent isLoggedIn={true} name='Adarsh' messageCount={1340} /> */}
      <Text as='h1' size='lg' color='secondary'>Hellow</Text>
      <Text as='p' size='sm' >Goodmorning</Text>
      <Text as='label' htmlFor='someId' >Namasthe</Text>
    </div>
  );
}

export default App;
