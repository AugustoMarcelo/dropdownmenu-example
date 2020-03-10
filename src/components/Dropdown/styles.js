import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Button = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;

  svg {
    transition: fill 0.2s;
  }

  &:hover {
    svg {
      fill: #222;
    }
  }
`;

export const Menu = styled.ul`
  position: absolute;
  z-index: 99;
  bottom: -110px;
  list-style: none;
  background: #fff;
  border-radius: 4px;
  width: 120px;
  box-shadow: 0 0 5px #00000026;

  @media (max-width: 767px) {
    right: -7px;
  }

  > span {
    position: relative;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0px 3px 3px 0 #00000026;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      left: 70px;
      
      border: 7px solid black;
      border-color: transparent transparent #fff #fff;
      
      transform-origin: 0 0;
      transform: rotate(135deg);
      
      box-shadow: -3px 3px 5px 0 #00000026;

      @media (max-width: 767px) {
        left: 115px;
      }
    }
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #999;
    font-size: 13px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }

    &:hover {
      background: #eee;
      color: #444;

      &:first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      &:last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    span {
      margin-left: 5px;
    }
  }
`;