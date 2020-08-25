import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  max-width: 1300px;
  margin: 44px auto 0;

  #details-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 74px;
    padding: 0 12px 4px 24px;
    background: #e6e6e6;
  }

  #details-header #details-title {
    padding: 10px 10px 0 0;
    color: #116193;
    font-size: 32px;
    font-weight: 400;
  }

  #details-header #details-date {
    padding-top: 8px;
    color: #999;
    font-size: 20px;
    font-weight: 400;
  }

  #details-content {
    width: 100%;
    background: #f2f2f2;
  }

  #details-content-texts {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #details-content-texts .details-section-title {
    width: 100%;
    padding-bottom: 6px;
    margin-top: 10px;
    border-bottom: 3px solid #00e8e4;
    color: #116193;
    font-weight: 400;
  }

  #details-content-texts #details-description {
    margin-top: 18px;
    color: #444;
    font: 400 18px 'Lato';
  }
  
  #details-infos{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  } 

  #details-infos .details-infos-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
    margin-right: 16px;
  }

  .details-infos-item .details-section-subtitle {
    font-size: 22px;
    color: #116193;
    font-weight: 400;
  }

  .details-infos-item .details-section-text {
    color: #444;
    font: 400 16px 'Lato';
  }

  .details-genre-list {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0 30px 0;
  }

  .details-percent-border{
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    margin: -26px 0 16px 0;
    border: 2px solid #116193;
    border-radius: 50%;
    background: #00e8e4;
  }

  .details-percent {
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

  img{
    width: 100%;
  }

  iframe {
    margin: 40px auto 80px;
  }

  @media (min-width: 720px) {
    width: 100%;

    #details-content {
      display: flex;
      flex-direction: row-reverse;
    }

    #details-header {
      flex-direction: row;
      padding: 0 20px 0 24px;
    }
    
    img {
      width: 24%;
    }

    #details-content-texts {
      padding: 24px;
    }

    #details-content-texts #details-description {
      margin-bottom: 30px;
    }

    #details-infos{
      width: 100%;
      justify-content: space-between;
      margin: 20px 0 30px 0;
    } 

    #details-infos .details-infos-item{
      min-width: 0;
    }

    .details-percent-border{
      width: 112px;
      height: 112px;
      margin: -42px 20px 0 0;
      border: 4px solid #116193;
    }

    .details-percent {
      width: 90px;
      height: 90px;
      font-size: 36px;
    }
  }

`;
