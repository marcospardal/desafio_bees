import React, { useState } from 'react'

import { Card as CardType } from '../../store/ducks/cards/types';

import * as Style from './card.styles'

// icons
import DeleteIcon from '../../assets/images/trash.svg'
import Location from '../../assets/images/location.svg'
import Chart from '../../assets/images/chart.svg'
import Phone from '../../assets/images/phone.svg'
import Plus from '../../assets/images/plus-circle.svg'

interface CardProps {
  card: CardType
}

const Card = ({ card }: CardProps) => {
  const [addMore, setAddMore] = useState<boolean>(false)
  const [newData, setNewData] = useState<string>('')

  return(
    <Style.Card>
      <Style.CardTitle>{card.title}</Style.CardTitle>
      <div>
        <Style.CardInfo>{card.street}</Style.CardInfo>
        <Style.CardInfo>{card.state}, {card.city} - {card.country}</Style.CardInfo>
      </div>
      <Style.CardFooter>
        <Style.CardItems>
          <Style.CardIcon src={Chart} alt='Type' />
          {card.type}
        </Style.CardItems>
        <Style.CardItems>
          <Style.CardIcon src={Location} alt='Location'/>
          {card.postalCode}
        </Style.CardItems>
        <Style.CardItems>
          <Style.CardIcon src={Phone} alt='Phone'/>
          {card.telephone}
        </Style.CardItems>
        <Style.CardItems>
          <Style.AddMoreIcon 
            src={Plus} 
            alt='Add'
            onClick={() => setAddMore(true)}
          />
            {addMore ? 
              <Style.Input 
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') setAddMore(false)
                }}
              /> 
              : newData !== '' ? newData : 'add more'}
        </Style.CardItems>
      </Style.CardFooter>
    </Style.Card>
  )
};

export default Card;