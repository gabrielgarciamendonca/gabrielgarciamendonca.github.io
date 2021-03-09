import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animatedClose from '../../assets/json/close-animated.json';

import { CloseButton, Container, MenuOptions } from './style';

interface MenuProp {
  onClose: Function,
}

const Menu: React.FC<MenuProp> = (props) => {
  const [ isStopped, setIsStopped ] = useState(false);
  const [ isPaused, setIsPaused ] = useState(false);


  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animatedClose,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <MenuOptions>
        <CloseButton onClick={() => props.onClose()}>
          <Lottie 
            options={defaultOptions}
            isStopped={isStopped}
            isPaused={isPaused}
            style={ {width: "20px", height: "20px"} }
          />
        </CloseButton>
        
      </MenuOptions>
    </Container>
  );
}

export default Menu;