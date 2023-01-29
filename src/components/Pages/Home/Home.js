import React, { useState } from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import SecaoTexto from './SecaoTexto/SecaoTexto';

function Home( props ) {

  let modo = props.classe;

  return (
    <main className='Home'>
      <Banner />
      <SecaoTexto 
        classe = { modo }/>
    </main>
  )
}

export default Home;