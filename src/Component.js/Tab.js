import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
// import './NavBar.css';
import {Tabs, Navbar, NavbarBrand, NavbarToggle,Collapse, Nav, } from 'react-bootstrap';
import CardA from './CardA';
import CardB from './CardB';
import Contact from './Contact';
import Profile from './Profile';
import Video from './Video';
import Content from './Content';
function Tab(){

    return(<>
     
<Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
 

>
  <Tab eventKey="home" title="Home">
  <Profile></Profile>
  <CardA></CardA>
  <hr/>
  {/* <Video></Video> */}
    <hr/>
    <Contact></Contact>
  </Tab>
  {/* <Tab eventKey="video" title="Video" >
  <Video></Video>
  </Tab> */}
  <Tab eventKey="profile" title="Profile" >
 <Profile></Profile>
  </Tab>
  <Tab eventKey="Project" title="Project">
  <Content></Content>

  </Tab>

  <Tab eventKey="contact" title="Contact" >
  <Contact></Contact>
  </Tab>
</Tabs>

    </>)
}

export default Tab;