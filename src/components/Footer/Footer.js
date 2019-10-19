import React, { Component } from 'react'
import footer from '../Images/footer.jpg'
import { Container, Row, Col  } from 'reactstrap';
import { FaFacebookSquare, FaWeight } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './style.css'
class Footer extends Component {
  render() {
    return (
      <div>
            <div style={{backgroundColor:'grey',padding:'20px 0px'}} >
               <div className="" >
                <Row className="container-fluid">
                        <Col lg="3" md="3" md="12" xs="12" >
                            <div className="text-center" style={{fontWeight:'bold',color:'white'}}>
                                <h3 className="text-center">
                                    FashionIcon 
                                </h3>    
                            </div>
                            
                        </Col>
                        <Col lg="6" md="6" sm="12" xs="12"  >
                            <div className="text-center">
                                <a target="_blank" href="https://www.facebook.com/Vom-Wild-Wolf-House-444549682947403/?ref=br_rs"><span className="footer_icons"><FaFacebookSquare/></span></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured"><span className="footer_icons"><FaYoutubeSquare/></span></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured"><span className="footer_icons"><FaInstagram/></span></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured"><span className="footer_icons"><FaFacebookSquare/></span></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC_JV8HHg0bgo4lsY7b5o-EQ/featured"><span className="footer_icons"><FaLinkedin/></span></a>
                            </div>
                       
                        </Col>
                        <Col lg="3" md="3" md="12" xs="12"  >
                            <div className="text-center" style={{fontWeight:'bold',color:'white'}}>
                                <span className="text-center">
                                    Developed By OsamaRajpoot 
                                </span>    
                            </div>
                        </Col>
                    </Row>
               </div>
            </div>
        {/* <img src={footer}/> */}
      </div>
    )
  }
}

export default Footer
