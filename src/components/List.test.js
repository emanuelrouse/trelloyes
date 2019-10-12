import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from '../STORE';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List
        key={STORE.lists.map(list => list.id)}
        header={STORE.lists.map(list => list.header)}
        cards={STORE.lists.map(list => list.cardIds.map(id => STORE.allCards[id]))}
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders UI as expected', () => {
    const key = STORE.lists.map(list => list.id);
    const header = STORE.lists.map(list => list.header);
    const cards = STORE.lists.map(list => list.cardIds.map(id => STORE.allCards[id]));
    const tree = renderer
      .create(<List key={key} header={header} cards={cards}/>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
})