import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  margin: 0 auto;
  
  #homepage-content {
    min-height: 74vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #search-input{
    width: 100%;
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

  #pagination{
    display: flex;
    align-items: center;
    margin: 20px 0 20px 0;
  }

  #pagination .active {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    background: #00e8e4;
    border: 2px solid #116193;
    border-radius: 50%;
  }

  .border-marker .page-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding-bottom: 2px;
    border-radius: 50%;
    background: none;
    color: #116193;
    font-size: 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .active .page-marker {
    background: #116193;
    color: #00e8e4;
    font-size: 28px;
  }
`;
