import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  return (
    <section className='List'>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => 
          <Card
            key={card.id}
            title={card.title}
            content={card.content}  
          />
        )}
        <button 
          type="button"
          className="button"
        >
            + Add Random Card
        </button>
      </div>
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