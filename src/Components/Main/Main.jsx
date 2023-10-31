import React from 'react'
import About from './About/About';
import Clients from './Clients/Clients';
import Consultation from './Consultation/Consultation';
import Products from './Products/Products';
import Services from './Services/Services';
import Float from './Float';

const Main = () => {
  return (
    <div>
        <About/>
        <Products/>
        <Services/>
        <Clients />
        <Consultation/>
        <Float/>
    </div>
  )
}

export default Main;