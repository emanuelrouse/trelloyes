import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {
  console.log(props.header)
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
    </section>
  )
}
export default List;













// content={card.cards} <Card title={props.cards.map(card => card.title)}/>
/* 
      <header className="list-header">
        {headers.map(header => {
          return <h2 key={header.id}>{header.header}</h2>
        })}
      </header>
      <div className="List-cards">
        {<Card key={props.cardIds}/>}
      </div>
*/