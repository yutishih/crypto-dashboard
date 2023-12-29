import React from 'react'
import "./page.scss";
import Navigation from "../components/Navigation/Navigation";
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

function Home() {
  return (
    <div>
      <Navigation />
      <div className='home-container'>
        <BreadCrumb />
      </div>
    </div>
  )
}

export default Home
