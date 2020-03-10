import React from 'react';

import Dropdown from '../Dropdown';

import { Card } from './styles';

export default function ListItem({ data }) {
  function onView() {
    alert(`Visualizando entrega ${data.id}`);
  }

  function onDelete() {
    alert('Removendo dados');
  }

  function onEdit() {
    alert('Editando dados');
  }

  return (
    <Card>
      <span>{`#${data.id}`}</span>
      <span>{data.recipient}</span>
      <span>{data.delivery_man}</span>
      <span>{data.city}</span>
      <span>{data.state}</span>
      <span className={`status ${data.status}`}>{data.status}</span>
      <Dropdown onView={onView} onDelete={onDelete} onEdit={onEdit} />
    </Card>
  )
}