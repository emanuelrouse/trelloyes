import React from 'react';
import List from './List';

function Lists(props) {
  const lists = props.lists.map(list => {
    const id = list.id;
    const header = list.header;
    const cards = list.cardIds.map(cardId => {
      return props.cards[cardId]
    }); 
    
    return <List 
              key={id} 
              header={header} 
              cards={cards}
            />
  });
  
  return (
    <>
      {lists}
    </>
  );
}

export default Lists;