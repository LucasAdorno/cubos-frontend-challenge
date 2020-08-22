import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #search-input{
    width: 80%;
    height: 50px;
    padding: 0 20px 0 20px;
    margin: 40px 0 40px 0;
    border: none;
    border-radius: 40px;
    outline: none;
    font: 400 18px 'Abel';
    background: #ebebeb;
    color: #222;
  }
  #search-input::placeholder{
    color: #7eafce;
  }

`;
