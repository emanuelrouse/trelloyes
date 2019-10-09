import React from 'react';
import List from './List';

function Lists(props) {
  const lists = props.lists.map(list => {
    const cards = list.cardIds.map(cardId => {
      return props.cards[cardId]
    }); 
    return <List header={list.header} cards={cards}/>
  });

  return (
    <>
      {lists}
    </>
  )
}

export default Lists;