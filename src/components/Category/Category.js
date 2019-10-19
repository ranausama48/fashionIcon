import React, { Component } from 'react'
import './style.css'
import { Container, Row, Col  } from 'reactstrap';
import gucci2 from '../Images/gucci2.jpg'
import hollister2 from '../Images/hollister2.jpg'
import sec1 from '../Images/sec1.jpg'

import column12 from '../Images/column12.jpg'
import column11 from '../Images/column11.jpg'
import sec2 from '../Images/sec2.jpg'

import column8 from '../Images/column8.jpg'
import column9 from '../Images/column9.jpg'
import column7 from '../Images/column7.jpg'

import column4 from '../Images/column4.png'
import column6 from '../Images/column6.jpg'
import column5 from '../Images/column5.jpg'

import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
class Category extends Component {
  render() {
    return (
        <div>
            <div className="bg_category">
                <div className="Cateogry_tiitle">
                    <h3 className="display-3">Category</h3>
                </div>
                <div className="container" style={{padding:'20px'}}>
                    <Row >
                        <Col  xs="12" lg="6" md="12" sm="12"  style={{paddingTop:'40px'}}>
                            <Row>
                                    <Col lg="6" md="6" sm="6" xs="6" style={{paddingRight:'0px'}}>
                                        <Roll left>
                                            <img className="s-img" src={gucci2}  alt="gucci2" />
                                        </Roll>
                                        <Bounce top>
                                            <img className="s-img" src={hollister2} alt="hollister2"/>
                                        </Bounce>
                                    </Col>
                                    <Col lg="6" md="6" sm="6" xs="6" style={{paddingLeft:'0px'}}>
                                    <Bounce top>
                                            <img className="t-img-responsive" src={sec1} alt="sec1" />
                                        </Bounce>
                                    </Col>
                                    
                            </Row>

                           
                            

                        </Col>
                       
                       <Col xs="12" lg="6" md="12" sm="12" style={{paddingTop:'40px'}}>
                            <Row>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingRight:'0px'}}>
                                <Roll left>
                                    <img className="s-img" src={column12}  alt="gucci2" />
                                    </Roll>
                                    <Bounce top>
                                    <img className="s-img" src={column11} alt="hollister2"/>
                                    </Bounce>
                                </Col>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingLeft:'0px'}}>
                                <Bounce top>
                                    <img className="t-img-responsive" src={sec2} alt="sec1"  />
                                </Bounce>
                                </Col>
                            </Row>
                       </Col>
                    </Row>

                    <Row >
                    <Col xs="12" lg="6" md="12" sm="12" style={{paddingTop:'40px'}}>
                            <Row>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingRight:'0px'}}>
                                    <Roll left>
                                        <img className="s-img" src={column8}  alt="gucci2" />
                                    </Roll>
                                    <Bounce top>
                                        <img className="s-img" src={column9} alt="hollister2"/>
                                    </Bounce>
                                </Col>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingLeft:'0px'}}>
                                <Bounce top>
                                    <img className="t-img-responsive" src={column7} alt="sec1" />
                                    </Bounce>
                                </Col>
                            </Row>
                        </Col>
                       
                       <Col xs="12" lg="6" md="12" sm="12" style={{paddingTop:'40px'}}>
                       <Row>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingRight:'0px'}}>
                                    <Roll left>
                                        <img className="s-img" src={column4}  alt="gucci2" />
                                    </Roll>
                                    <Bounce top>
                                        <img className="s-img" src={column6} alt="hollister2"/>
                                    </Bounce>
                                </Col>
                                <Col lg="6" md="6" sm="6" xs="6" style={{paddingLeft:'0px'}}>
                                    <Bounce top>
                                        <img className="t-img-responsive" src={column5} alt="sec1" />
                                    </Bounce>
                                </Col>
                            </Row>
                       </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
  }
}
export default Category;