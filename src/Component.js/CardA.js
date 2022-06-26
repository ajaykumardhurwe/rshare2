

import { Link } from '@mui/material';
import { Dropdown } from 'bootstrap';
import {CardGroup, DropdownButton, CardImg, Card, Button} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
function CardA(){

    return(
        <>
        {/* first way */}

        <Card>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Img src={require('../Images/applogo2.jpg').default}></Card.Img>
  <Card.Body>
    <Card.Title className='red'>Chat App Using Android Studio</Card.Title>
    <Card.Text>
    Hello !!
        <p></p>
       Above Image is my app logo basically in this project i have designed chat app using java language in android studio details is following below --
      <br/>
      <br/>
      

       <Card.Link href="https://drive.google.com/file/d/1_PKn_5Z3FFsKEWVw4owrKw3PHJYSbXP6/view?usp=sharing">App Download</Card.Link>
       <br/>
      <br/>
     <Card.Link href="https://github.com/ajaykumardhurwe/MobileChatApp2">Source Code On Github</Card.Link>
      <br/>
      <br/>
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>

{/* second Card */}

<Card>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Img src={require('../Images/ModernFarming.jpg').default}></Card.Img>
 
  <Card.Body>
    <Card.Title className='red'>Digitaliztion Farming Using C++</Card.Title>
    <Card.Text>
    Hello !!
        <p></p>
      In this project i have creatde Digitaliztion Farming mangement System which is basically manage all necessary facilities.

      <br/>
      <br/>
      <Card.Link href="https://github.com/ajaykumardhurwe/Modern-farming-Mangement-system-final-project-report">Souce Code On Github</Card.Link>
    <br/>
    <br/>
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>


        </>
    )
}

export default CardA;