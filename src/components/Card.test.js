import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={"First list"} content={"lorem ipsum"}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders UI as expected', () => {
    const tree = renderer
    .create(<Card title={"First list"} content={"lorem ipsum"}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
