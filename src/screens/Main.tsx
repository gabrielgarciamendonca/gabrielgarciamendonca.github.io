import React, { useState } from 'react';
import Article from '../components/article';
import Header from '../components/header';
import Menu from '../components/menu';

import { AboutContainer, ArticleContainer, Container, HeaderContainer, ImageContainer, MenuLeft } from './style';

const Main: React.FC = () => {
  const [ menuShow, setMenuShow ] = useState(false);

  const closeAndOpen = () => {
    setMenuShow(!menuShow);
  }

  const textAboutMe = (
    <AboutContainer>
      <ImageContainer>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHUZmkRI527Vg/profile-displayphoto-shrink_800_800/0/1614796316864?e=1620864000&v=beta&t=YE_O6tG1CC8YxsfU_7BHJLNPO1UtsBKfnNnojrklLbM" alt="profile picture"/>
      </ImageContainer>
      <span>Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. </span>
      <br/>
      <br/>
      <span>Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis. diam penatibus aliquet tellus, in rutrum augue. Pellentesque.</span>

    </AboutContainer>
  )


  return (
    <Container>
      <HeaderContainer>
        <Header onClose={ closeAndOpen } />
      </HeaderContainer>
      {
        menuShow && (
          <MenuLeft>
            <Menu onClose={ closeAndOpen }/>
          </MenuLeft>
        )
      }
      <ArticleContainer>
        <Article title="" content={ textAboutMe }/>
        
      </ArticleContainer>
      
    </Container>
  );
}

export default Main;