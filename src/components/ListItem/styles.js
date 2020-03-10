import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  height: 50px;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 0 10px #00000026;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;

  span.status {
    display: flex;
    align-items: center;
    background: #DFF0DF;
    color: #2CA42B;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 12px;

    &:before {
      content: "";
      display: block;
      position: relative;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 5px;
      background: #2CA42B;
    }

    &.withdrawn {
      background: #BAD2FF;
      color: #4D85EE;

      &:before {
        background: #4D85EE;
      }
    }

    &.pending {
      background: #F0F0DF;
      color: #C1BC35;

      &:before {
        background: #C1BC35;
      }
    }

    &.canceled {
      background: #FAB0B0;
      color: #DE3B3B;

      &:before {
        background: #DE3B3B;
      }
    }
  }
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