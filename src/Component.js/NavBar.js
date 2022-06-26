
// import './NavBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, {useEffect, useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Tabs, Tab, Modal, Button } from 'react-bootstrap'

function NavBar(){


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
      <>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="https://www.linkedin.com/in/ajay-kumar-dhurwe-37492a1bb"><LinkedInIcon></LinkedInIcon></Nav.Link>
      <Nav.Link href="https://www.instagram.com/ajay_dhurwe_750/"><InstagramIcon></InstagramIcon></Nav.Link> 
      <Nav.Link href="https://www.facebook.com/profile.php?id=100026767571412"><FacebookIcon></FacebookIcon></Nav.Link>
     
      <Nav.Link href="https://twitter.com/AjayKumarDhurwe?t=1kucoUgUGeOVN7ciF58TXA&s=08"><TwitterIcon></TwitterIcon></Nav.Link>

     {/* <Nav.Link eventKey={1} href="memes" onClick={handleShow}>SignUp</Nav.Link>
     <Nav.Link  eventKey={2} href="memes" onClick={handleShow}>
       SignIn</Nav.Link> */}

    </Nav>
    </Container>
  </Navbar>
        

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        </>
// 
//Try Second Option in bootstap

//         <React.Fragment>

// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="me-auto">
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Nav>
//       <Nav.Link href="#deets">More deets</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Dank memes
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
// </Navbar>
//         </React.Fragment>




// // try 3 rd

//  <React.Fragment>

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <a class="navbar-brand" href="#">Hidden brand</a>
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

// </React.Fragment> */}

//
//



// try 4th 

/* <React.Fragment>
<nav class="navbar">
        <div class="nav-content">
            <div onclick="handleclick" class="logo"><a href="#">MHPS</a></div>
            <ul class="nav-menu">
                <div class="icon-menu close-mobile-btn">
                    <i class="fa fa-times"></i>
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#marketing">Marketing</a></li>
                <li><a href="#">Contact Us</a></li>
                <li class="nav-btn"><a href="#">Sign Up</a></li>
            </ul>
            <div class="icon-menu mobile-btn">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </nav>

    <div class="banner">
        <div class="circle">
            <span>THE</span>
            <h1>DIGITAL</h1>
            <h2>AGENCY</h2>
            <i></i>
        </div>
        <ul class="banner-items">
            <li><a href="#">Website Design</a></li>
            <li><a href="#">Original Marketing</a></li>
            <li><a href="#">Brand Strategy</a></li>
        </ul>
    </div>
    <div id="marketing" class="content">
        <h1 class="title">What is Marketing, Really?</h1>
        <p>
            Dictionary.com defines marketing as, "the action or business of promoting and selling products or
            services, including market research and advertising."
        </p>
        <p>
            If you work in a marketing role like I do, it's probably difficult for you to define marketing even
            though you see and use it every day -- the term marketing is a bit all-encompassing and variable for
            a straightforward definition.
        </p>
        <p>This definition feels unhelpful.<br />
            The selling part, for instance, overlaps a little too snuggly with a "what is sales" definition, and
            the word advertising makes me think of Mad Men brainstorming sessions.
        </p>
        <p>But upon digging deeper, I began seeing that actually, marketing does overlap heavily with
            advertising and sales. Marketing is present in all stages of the business, beginning to end.
        </p>
        <h2>Download Now: State of Marketing Report [2020 Version]</h2>
        <p>
            At first, I wondered why marketing was a necessary component during product development, or a sales
            pitch, or retail distribution. But it makes sense when you think about it -- marketers have the
            firmest finger on the pulse of your consumer persona
        </p>
        <p>
            The purpose of marketing is to research and analyze your consumers all the time, conduct focus
            groups, send out surveys, study online shopping habits, and ask one underlying question: "Where,
            when, and how does our consumer want to communicate with our business?"
        </p>
        <p>
            Modern marketing began in the 1950s when people started to use more than just print media to endorse
            a product. As TV -- and soon, the internet -- entered households, marketers could conduct entire
            campaigns across multiple platforms. And as you might expect, over the last 70 years, marketers have
            become increasingly important to fine-tuning how a business sells a product to consumers to optimize
            success.
        </p>
        <p>
            In fact, the fundamental purpose of marketing is to attract consumers to your brand through
            messaging. Ideally, that messaging will helpful and educational to your target audience so you can
            convert consumers into leads.<br />
            Today, there are literally dozens of places one can carry out a marketing campaign -- where does one
            do it in the 21st century?
        </p>
        <h2>Types of Marketing</h2>
        <p>
            Where your marketing campaigns live depends entirely on where your customers spend their time. It's
            up to you to conduct market research that determines which types of marketing -- and which mix of
            tools within each type -- is best for building your brand. Here are several types of marketing that
            are relevant today, some of which have stood the test of time:
        </p>
        <ul id="services">
            <li>
                <strong>Internet marketing:</strong> Inspired by an Excedrin product campaign that took place online,
                the very
                idea of having a presence on the internet for business reasons is a type of marketing in and of
                itself.
            </li>
            <li>
                <strong>Search engine optimization:</strong> Abbreviated "SEO," this is the process of optimizing
                content on a
                website so that it appears in search engine results. It's used by marketers to attract people
                who perform searches that imply they're interested in learning about a particular industry.
            </li>
            <li>
                <strong>Blog marketing:</strong> Blogs are no longer exclusive to the individual writer. Brands now
                publish blogs
                to write about their industry and nurture the interest of potential customers who browse the
                internet for information.
            </li>
            <li>
                <strong>Social media marketing: </strong>Businesses can use Facebook, Instagram, Twitter, LinkedIn, and
                similar
                social networks to create impressions on their audience over time.
            </li>
            <li>
                <strong>Print marketing:</strong> As newspapers and magazines get better at understanding who subscribes
                to their
                print material, businesses continue to sponsor articles, photography, and similar content in the
                publications their customers are reading.
            </li>
            <li>
                <strong>Search engine marketing:</strong> This type of marketing is a bit different than SEO, which is
                described
                above. Businesses can now pay a search engine to place links on pages of its index that get high
                exposure to their audience. (It's a concept called "pay-per-click" -- I'll show you an example
                of this in the next section).
            </li>
            <li>
                <strong>Video marketing:</strong> While there were once just commercials, marketers now put money into
                creating
                and publishing all kinds of videos that entertain and educate their core customers.
            </li>
        </ul>
        
    </div>

    {/* <script>
        const body = document.querySelector('body');
        const navbar = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        const mobileButton = document.querySelector('.mobile-btn');
        const closeMobileButton = document.querySelector('.close-mobile-btn');
        mobileButton.onclick = () => {
            navMenu.classList.add('active')
            mobileButton.classList.add('hidden')
            body.classList.add('disabled-scroll')
        }

        closeMobileButton.onclick = () => {
            navMenu.classList.remove('active')
            mobileButton.classList.remove('hidden')
            body.classList.remove('disabled-scroll')
        }

        window.onscroll = () => {
            this.scrollY > 100 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky')
        }
    </script> */
// </React.Fragment> */}
    )
}
export default NavBar;