import { Dispatch } from "redux";
import { CARDS_FAIL, CARDS_LOADING, CARDS_SUCCESS, Card, CardsDispatchTypes, REMOVE_CARD } from './types'

import api from '../../../services/api'

export const getCards = () => async (dispatch: Dispatch<CardsDispatchTypes>) => {
  try {
    dispatch({ type: CARDS_LOADING })

    const response = await api.get('/breweries')
    const cards: Card[] = response.data.map((card: any) => {
      return {
        title: card.name,
        city: card.city,
        state: card.state,
        country: card.country,
        type: card.brewery_type,
        postalCode: card.postal_code,
        telephone: card.phone,
        street: card.street
      }
    })

    dispatch({
      type: CARDS_SUCCESS,
      payload: {
        cards: cards
      }
    })
  } catch (e) {
    dispatch({ type: CARDS_FAIL })
  }
}

export const removeCard = (cardId: number) => (dispatch: Dispatch<CardsDispatchTypes>) => {
  dispatch({ type: REMOVE_CARD, data: { cardId } })
}