import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  
`
export const MenuLeft = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

export const ArticleContainer = styled.div`
  margin-top: 320px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 100vh;
  }
`

export const AboutContainer = styled.div`
  span {
    width: 50%;
  }
`

export const ImageContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    margin: 10px;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`