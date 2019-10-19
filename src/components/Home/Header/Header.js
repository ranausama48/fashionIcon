import React, { useState } from 'react';
import './style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import Rotate from 'react-reveal/Rotate';
  import Fade from 'react-reveal/Fade';
import final from '../../Images/final.png'
import logo from '../../Images/logo.png'
import Slider from './Slider'
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
       
        <div class="container-fluid main">
            <div  style={{position: 'relative'}}>
                <Navbar color="transperant" light expand="md">
                    <div className="container">
                        <NavbarBrand  href="/" style={{color:'white'}}>
                            <div className="animate wobble">
                                <Rotate top left cascade>
                                    FashionIcon
                                </Rotate>
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/" style={{color:'white'}}>
                                        <Rotate top left cascade>
                                            Home
                                        </Rotate>    
                                    </NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>
                                        <Rotate top left cascade>
                                            Brands
                                        </Rotate>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>
                                        <Rotate top left cascade>
                                            Category
                                        </Rotate>
                                        
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white'}}>
                                        <Rotate top left cascade>
                                            Social
                                        </Rotate>
                                    </NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div> 
            <section id="home">
                <div className="container" style={{paddingTop: '80px'}}>
                    <div className=" text-center bg-transparent" style={{marginBottom:'50px'}}>
                    <Fade top>
                        <div className="text-center">
                            <h3>
                            
                                <img className="img-fluid " src={logo} alt="logo"/>
                              
                            </h3>
                        </div>
                        
                        <img src={final} className="img-fluid img-responsive" alt="Dispaly image" height="130"/>
                        </Fade>
                        {/* <h1 className="display-4 wow zoomInLeft slogan-responsive"><del className="text-white">Pay For Yourself</del></h1> */}
                    </div>
                    
                    <Slider/>
                
                </div>
            </section>   
        </div>     
    </div>
  );
}

export default Header;