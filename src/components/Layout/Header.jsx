import React, {Fragment} from 'react';
import cl from './Header.module.css'
import sushiImage from './../../assets/sushi.jpg'

const Header = () => {
  return (
    <Fragment>
      <header className={cl.header}>
        <h1>Японская кухня</h1>
        <button>
          Корзина
        </button>
      </header>
      <div className={cl['main-image']}>
        <img src={sushiImage} alt=""/>
      </div>
    </Fragment>
  );
};

export default Header;