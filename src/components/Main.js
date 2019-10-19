import React, { Component } from 'react'
import Home from './Home/Home'
import Brands from './Brands/Brands'
import Category from './Category/Category'
import Footer from './Footer/Footer'
class Main extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Brands/>
        <Category/>
        <Footer/>
      </div>
    )
  }
}

export default Main
