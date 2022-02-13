import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card'

import * as Style from './listpage.styles'
import GoBackIcon from '../../assets/images/goback.svg'

// interfaces
import { RootStore } from '../../store'

// actions
import { removeUser } from '../../store/ducks/userData/actions';

import { Card as CardType } from '../../store/ducks/cards/types';

const ListPage = () => {
  const userData = useSelector((state: RootStore) => state.UserDataReducer.userData)
  const cardsData = useSelector((state: RootStore) => state.CardsReducer)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <Style.Container>
      <Style.NavBar>
        <Style.Row>
          <Style.GoBackIcon src={GoBackIcon} alt='Go Back Icon' onClick={handleGoBack}/>
          <Style.PageTitle>Go back</Style.PageTitle>
        </Style.Row>
        <Style.PageTitle>{userData.name}</Style.PageTitle>
      </Style.NavBar>
      <Style.Content>
        {cardsData.loading ? <Style.Loader /> : 
          cardsData.data.map((card: CardType, index) => (
            <Card card={card} id={index} />
          ))
        }
      </Style.Content>
    </Style.Container>
  )
};

export default ListPage;