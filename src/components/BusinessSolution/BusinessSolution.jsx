import React, { useState } from 'react';
import './BusinessSolution.css';
//import BlockMenu from "../BlockMenu/BlockMenu";
import banner from './res/banner.jpg';
import p1 from './res/p1.JPG';
import p2 from './res/p2.JPG';
import p3 from './res/p3.JPG';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Tab, Nav, Tabs } from 'react-bootstrap';
import Overview from './Overview';
import Features from './Features';
import ReleaseHistory from './ReleaseHistory';
import RelatedDeals from './RelatedDeals';

function BusinessSolution() {
  let prices = [1499, 1599, 1699];
  let newPrices = [999, 1299, 1399];
  const [pricing, setPricing] = useState(prices[0]);
  const [d_price, setD_price] = useState(newPrices[0]);

  const clickHandler = (id, type) => {
    if (id) {
      setPricing(prices[id - 1]);
      setD_price(newPrices[id - 1]);
    }
  };
  return (
    <>
      <NavBar />
      <section className="business-solution">
        <div className="row">
          <div className="col-md-12" align="center">
            <div className="heading pb-5">
              <h2>
                Business <span className="ship">Solutions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row main_area">
          <div className="col-md-6">
            <img src={banner} className="banner-img" />
          </div>

          <div className="col-md-5 bs_content">
            <h2 className="business-heading">PRODUCT NAME</h2>
            <p className="para">
              Product Description
              <br />
              <br />
              Solve your puzzle with unique ideas in business automation.Use
              theAllSafe's top-rated software to make money your business
              sustainable and more profitable.Let's us help you to touch your
              dream.
            </p>

            <div className="tabsContainer">
              <Tab.Container defaultActiveKey={1}>
                <Nav variant="pills">
                  {[
                    { id: 1, type: 'Basic' },
                    { id: 2, type: 'Value' },
                    { id: 3, type: 'Prime' },
                  ].map((el) => (
                    <Nav.Item>
                      <Nav.Link
                        eventKey={el.id}
                        onClick={() => clickHandler(el.id)}
                        className="basic"
                      >
                        {el.type}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Tab.Container>
              <p className="other_text">
                Basic Description
                <br /> Want to put your own image in the circle?
              </p>
              <div className="bs_prices">
                <p>
                  <span className="strike">₹{pricing}/month</span>{' '}
                  <span className="off pl-2">-34%</span>
                </p>
                <button className="btn btn-bs">₹ {d_price}/month</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row tabsssContainer">
        <div className="col-md-12">
          <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
            <Tab eventKey="overview" title="OVERVIEW">
              <Overview />
            </Tab>
            <Tab eventKey="features" title="FEATURES">
              <Features />
            </Tab>
            <Tab eventKey="history" title="RELEASE HISTORY">
              <ReleaseHistory />
            </Tab>
            <Tab eventKey="license" title="BUY LICENSE"></Tab>
            <Tab eventKey="deals" title="RELATED DEALS">
              <RelatedDeals />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default BusinessSolution;
