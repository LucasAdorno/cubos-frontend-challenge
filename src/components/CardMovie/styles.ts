import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 40px;
  background: #ebebeb;

  img {
    width: 100%;
  }

  .card-content{
    width: 100%;
  }

  .card-title {
    width: 100%;
    padding: 16px 0 30px 12px;
    background: #116193;
    color: #00e8e4;
    font: 400 36px 'Abel';
  }

  .card-infos{
    width: 100%;
    display: flex;
    flex-direction:column;
    padding: 0 18px;
  }

  .card-infos .card-percent-border{
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    margin: -35px 20px 0 0;
    border: 2px solid #116193;
    border-radius: 50%;
    background: #00e8e4;
  }

  .card-infos .card-percent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 26px;
    background: #116193;
    color: #00e8e4;
  }

  .card-infos .card-date{
    margin-top: -35px;
    color: #777;
  }

  .card-infos .card-description {
    margin-top: 26px;
    color: #444;
    font: 400 18px 'Lato';
  }

  .card-infos .card-genre-list {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0 30px 0;
  }

  @media(min-width: 720px) {
    flex-direction: row;

    img {
      width: 24%;
      min-height: 300px;
    }

    .card-title {
      width: 100%;
      padding: 22px 0 2px 100px;
      background: #116193;
      color: #00e8e4;
      font: 400 36px 'Abel';
    }

    .card-infos .card-percent-border {
      align-self: flex-start; 
      margin: -35px 20px 0 0;
    }

    .card-infos .card-date{
      margin-left: 85px;
      font-size: 20px;
      color: #999;
    }
  }

`;