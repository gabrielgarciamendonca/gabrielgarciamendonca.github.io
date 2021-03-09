import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 400;
    font-size: 12px;
    text-align: justify;
    margin: 10px 30px;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    color: #333333;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;

    p {
      margin: 10px 50px;
    }

    div {
      font-size: 18px;
      margin: 0 50px;
    }
  }
`