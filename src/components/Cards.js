import React from 'react';
import Card from './Card';

function Cards(props) { 
  const Cards = props.cards.map(card => {
    const content= card.content;
    const id = card.id;
    const title=card.title;
    return <Card key={id} title={title} content={content} /> 
  })
  
  return (
    <>
    {Cards}
    </>
  );
}

export default Cards;