import React, { useEffect, useState } from 'react';
import { Container, NavigationContainer, MenuContainer, TitleContainer, DescriptionContainer, MenuOptions } from './style';
import dotenv from 'dotenv';
import { api } from '../../services/nasa-api';
import Iapod from '../../@types/Iapod';
import MenuSrc from '../../assets/menu-sand.svg';

import { toast } from 'react-toastify';

interface HeaderProps {
  onClose: Function;
}

const word = ["Hi, I'm Gabriel Garcia"];

const Header: React.FC<HeaderProps> = ( props ) => {
  const [ imageOfTime, setImageOfTime ] = useState<string>();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [color, setColor] = useState('black');

  useEffect( () => {
    (async() => {
      dotenv.config();
      try {
        const result = await api.get<Iapod>(`/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        setImageOfTime(result.data.hdurl);
        if ( result.status !== 200 ) {
          toast.error('Imagem não foi encontrada na api da NASA!');
        } else {
          setTimeout( () => {
            toast.warning('Caso a imagem não esteja em boas condições, peço desculpas, pois a mesma está sendo consultada na api da NASA!', {position: 'bottom-right'});
          }, 3000);
          toast.success('Bem vindo ao meu portfólio!', {position: 'bottom-right'});
        }
      }catch(err) {
        toast.error('Ocorreu um erro ao buscar a imagem na api da NASA!');
        console.log(err);
      }
      
      
      
    })()
  }, [] )
  
  // typeWriter
  useEffect(() => {
    if (index === word.length) return;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, 350);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
    setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  
  return (
    <Container srcImage={ imageOfTime } color={ color }>
          <NavigationContainer>
            <MenuContainer onClick={ () => props.onClose() }>
              <img src={MenuSrc} alt="Menu Sandwich"/>
            </MenuContainer>
            <TitleContainer>
              <p>Portofolio</p>
              <MenuOptions>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Skills</li>
                  <li>Portfólio</li>
                  <li>Contact</li>
                </ul>
              </MenuOptions>
            </TitleContainer>
          </NavigationContainer>
          <DescriptionContainer>
            <h3>{`${word[index].substring(0, subIndex)}${blink ? "|" : ""}`}</h3>
            <p>Front-End Developer</p>
            <a href="">
              <p>Latest works</p>
            </a>
          </DescriptionContainer>
        </Container>
    
  );
}

export default Header;