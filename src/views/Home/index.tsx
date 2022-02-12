import React, { useState } from 'react';

import * as Style from './home.styles'
import BeeIcon from '../../assets/images/bee.svg'

interface UserData {
  name: string;
  isOlder: boolean;
}

const Home = () => {
  const [userData, setUserData] = useState<UserData>({ name: '', isOlder: false });

  return (
    <Style.Container>
      <div>
        <Style.Instructions>Please, enter you full name bellow</Style.Instructions>
        <Style.Instructions>Only, alphabetical characters are accepted</Style.Instructions>
        <Style.Input 
          placeholder='Full name'
          value={userData.name}
          onChange={e => setUserData(prevState => ({ ...prevState, name: e.target.value }))}
        />
      </div>
      <Style.Row>
        <input 
          type='checkbox' 
          style={{ marginRight: 8 }} 
          checked={userData.isOlder} 
          onChange={e => setUserData(prevState => ({ ...prevState, isOlder: e.target.checked }))}
        />
        <Style.Instructions>Are you older than 18 years old?</Style.Instructions>
      </Style.Row>
      <Style.Submit isDisabled={userData.name === '' || !userData.isOlder} disabled={userData.name === '' || !userData.isOlder}>
        Enter
      </Style.Submit>
      <Style.Bee src={BeeIcon} alt='Ícone Abelha'/>
    </Style.Container>
  )
};

export default Home;