import React, { useState, useRef } from 'react';
import { MdMoreHoriz, MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, Button, Menu } from './styles';

export default function Dropdown({ onView, onDelete, onEdit }) {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null);

  function showMenu(e) {
    e.preventDefault();

    setVisible(true);
    
    document.addEventListener('click', closeMenu);
  }

  function closeMenu(event) {
    // if (!dropdownRef.current.contains(event.target)) { }

    setVisible(false);
    
    document.removeEventListener('click', closeMenu);
  }

  return (
    <Container>
      <Button type="button" onClick={showMenu}>
        <MdMoreHoriz color="#c6c6c6" size={16} />
      </Button>

      {visible && (
        <Menu ref={dropdownRef}>
          <span></span>
          <li onClick={onView}>
            <MdVisibility color="#8E5BE8" size={15} />
            <span>Visualizar</span>
          </li>
          <li onClick={onEdit}>
            <MdCreate color="#4D85EE" size={15} />
            <span>Editar</span>
          </li>
          <li onClick={onDelete}>
            <MdDeleteForever color="#DE3B3B" size={15} />
            <span>Excluir</span>
          </li>
        </Menu>
      )}
    </Container>
  )
}