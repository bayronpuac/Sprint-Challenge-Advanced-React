import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library//react';
import PlayersCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('player is found', () => {
  const {getByText} = render(<App />);
  getByText(/player/i);
});


test('list is found', () => {
  const {getAllByText} = render(<App />);
  getAllByText(/list/i);
});

test('name is found', () => {
  const {getByText} = render(<PlayersCard />);
  getByText(/Name/i);
});

