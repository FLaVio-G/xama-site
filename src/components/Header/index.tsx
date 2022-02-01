import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import banner from '../../assets/banner.jpg';

const Header = (): JSX.Element => {
    return (
      <Container >

       <div>
       <img src={banner} alt="banner" />
       </div>
  
        
      </Container >
  
    );
  };
  
  export default Header;