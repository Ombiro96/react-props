import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderOne from './header';
import Hero from './hero';
import Title from './title';
import Card from './card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderOne />
    <Hero />
    <Title />
    <Card
    image="./kakashi.png"
    name="Mr. Kakashi"
    phone="073256265"
    email="kakashi@gmail.com"
    />
    <Card
    image="./sakura.png"
    name="Mrs. Sakura"
    phone="072626266"
    email="sakura@gmail.com"
    />
    <Card 
    image="./naruto.png"
    name="Mr. Hokage"
    phone="072300455"
    email="ramen@gmail.com"
    />
    <Card 
    image="./sasuke.png"
    name="Mr. Sasuke"
    phone="070452526"
    email="uchiha@gmail.com"
    />
  </React.StrictMode>
);

