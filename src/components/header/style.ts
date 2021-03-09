import styled from 'styled-components';

export const Container = styled.div<{ srcImage?: string, color?: string }>`
  background: url(${ props => props.srcImage });
  background-color: ${ props => props.color };
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 275px;
  }

  @media screen and (min-width: 768px) {
    height: 100vh;
    justify-content: space-evenly;
  }

`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  display: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    display: flex;
    align-items: center;
  }
`

export const MenuOptions = styled.div`
  
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      
      li {
        margin-left: 3rem;
        font-weight: 400;
        font-size: 16px;
        color: white;
        transition: 1s;

        :hover {
          cursor: pointer;
          color: #A100AA;
        }
      }
    }
  }
`

export const NavigationContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`

export const TitleContainer = styled.div`
  font-weight: 700;
  width: 90%;
  display: flex;
  color: white;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`

export const DescriptionContainer = styled.div`
  width: 80%;
  height: 60%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 20px;
      font-weight: 400;
    }

    p {
      font-size: 13px;
    }

    a {
      margin-top: 30px;
      color: white;
      text-decoration: underline;

      p {
        font-size: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 56px;
      font-weight: 400;
      align-self: flex-start;
    }

    p {
      font-size: 20px;
      margin-top: 15px;
      align-self: flex-start;
    }

    a {
      margin-top: 10%;
      color: white;
      text-decoration: underline;
      align-self: flex-start;
      
      p {
        font-size: 16px;
      }
    }
  }
`