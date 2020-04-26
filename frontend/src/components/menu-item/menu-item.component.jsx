import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {/* <span className='subtitle'>EXPLORER</span> */}
    </div>
  </div>
);

//withRouter est un High Order Component, il nous permet d'acceder a la propriété history du props
//History.push nous permet ici dynamiquement de recuperer l'adresse à partir du directory component
//Et de naviguer vers l'adresse correspondante peu importe où on se trouve déjà sur le site

export default withRouter(MenuItem);
