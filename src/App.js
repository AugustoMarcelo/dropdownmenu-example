import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import ListItem from './components/ListItem';

function App() {
  const [data, setData] = useState(
    [
      {
        id: 1,
        recipient: 'Destinatário 1',
        delivery_man: 'Entregador 1',
        city: 'Caicó',
        state: 'Rio Grande do Norte',
        status: 'delivered',
      },
      {
        id: 2,
        recipient: 'Destinatário 2',
        delivery_man: 'Entregador 2',
        city: 'Caicó',
        state: 'Rio Grande do Norte',
        status: 'pending',
      },
      {
        id: 3,
        recipient: 'Destinatário 3',
        delivery_man: 'Entregador 3',
        city: 'Caicó',
        state: 'Rio Grande do Norte',
        status: 'withdrawn',
      },
      {
        id: 4,
        recipient: 'Destinatário 4',
        delivery_man: 'Entregador 4',
        city: 'Caicó',
        state: 'Rio Grande do Norte',
        status: 'canceled',
      }
    ]
  );
  

  return (
    <div className="App">
      <GlobalStyle />
      {data.map(datum => <ListItem key={datum.id} data={datum} />)}
    </div>
  );
}

export default App;
