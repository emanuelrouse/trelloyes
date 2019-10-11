import React from 'react';
import Card from './Card';

function Cards(props) {
  // Left off working on cards component: error cards is not an array? 

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