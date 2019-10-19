import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  } from 'reactstrap';

import './style.css'
import levis1 from '../Images/levis1.png'
import ralph_lauren3 from '../Images/ralph_lauren3.jpg'
import gucci2 from '../Images/gucci2.jpg'
import hollister3 from '../Images/hollister3.jpg'
import { SSL_OP_NO_TLSv1_1 } from 'constants';

class Brands extends Component {
  render() {
    return (
        <div>
            <div>
                <Jumbotron style={{margin:'0px'}}>
                    <div className="brand_tiitle">
                        <h3 className="display-3">Brands</h3>
                    </div>
                    <div className="container">
                        <Row >
                            <Col  xs="12" lg="3" md="6" sm="12" style={{possition:'relative',marginBottom:'20px'}}>
                               <div className="g3">
                               <img src={levis1} width="100%" height="300px"/>
                                    <div className="g3_more" style={{padding:'0px'}}>
                                       <h2 className="text-center" style={{margin:'20px 0px'}}> LEVI's</h2>
                                        <p className="text-center paragraph_text" >Round ‘Em Up: A History of Levi’s® in Hollywood Westerns</p>
                                        <p className="text-center paragraph_text">As of 2019, the vast majority of Levi's are made overseas in a number of developing countries, such as India, Sri Lanka, Vietnam, and Indonesia, due to the availability of cheap, easy labor and raw materials.</p>
                                    </div>
                               </div>
                                
                            </Col>
                            <Col  xs="12" lg="3" md="6" sm="12" style={{possition:'relative',marginBottom:'20px'}}>
                               <div className="g3">
                                    <img src={ralph_lauren3} width="100%" height="300px"/>
                                    <div className="g3_more" style={{padding:'0px'}}>
                                        <h2 className="text-center" style={{margin:'20px 0px'}}>RALPH LAUREN</h2>
                                        {/* <p  className="text-center paragraph_text">Ralph Lauren Corporation is an American fashion company producing products ranging from the mid-range to the luxury segments.</p> */}
                                        <p className="text-center paragraph_text">Ralph Lauren Corporation is an American fashion company producing products ranging from the mid-range to the luxury segments. They are known for the clothing, marketing and distribution of products in four categories: apparel, home, accessories, and fragrances.</p>
                                    </div>
                                    
                               </div>
                                
                            </Col>
                            <Col  xs="12" lg="3" md="6" sm="12" style={{possition:'relative',marginBottom:'20px'}}>
                               <div className="g3">
                                    <img src={gucci2} width="100%" height="300px"/>
                                    <div className="g3_more" style={{padding:'0px'}}>
                                        <h2 className="text-center" style={{margin:'20px 0px'}}>GUCCI</h2>
                                        <p className="text-center paragraph_text">Gucci is part of the Kering Group. A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods, Jewelry and Watches</p>
                                        <p className="text-center paragraph_text">Gucci is an Italian luxury brand of fashion and leather goods. Gucci was founded by Guccio Gucci in Florence, Tuscany, in 1921.</p>
                                    </div>
                               </div>
                            </Col>
                            <Col  xs="12" lg="3" md="6" sm="12" style={{possition:'relative',marginBottom:'20px'}}>
                                <div className="g3">
                                    <img src={hollister3} width="100%" height="300px"/>
                                    <div className="g3_more" style={{padding:'0px'}}>
                                        <h2 className="text-center" style={{margin:'20px 0px'}}>HOLLISTER</h2>
                                        {/* <p className="text-center paragraph_text">New hoodies, sweatshirts, sweaters, long-sleeve tees & more—everything you need to layer up.</p> */}
                                        <p className="text-center paragraph_text">Hollister Co., often advertised as Hollister or HCo., is an American lifestyle brand owned by Abercrombie & Fitch Co. The concept was originally designed to attract consumers aged 14–18, at a lower price point than the parent brand through its Southern California-inspired image and casual wear</p>
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Jumbotron>
            </div>   
        </div>
    )
  }
}

export default Brands
