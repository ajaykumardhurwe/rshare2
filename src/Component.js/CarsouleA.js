import {Carousel, } from 'react-bootstrap';

function CarsouleA(){
    return(
        <>
       <Carousel width={100}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Images/aws.jpg').default}
      alt="First slide"
      width={10}
      height={250}
      
    />
    <Carousel.Caption>
      <h3>Aws Certificate</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img

      className="d-block w-100"
      // src="https://picsum.photos/200/300?grayscale"
      src={require('../Images/php.jpg').default} 
      alt="Second slide"
      width={200}
      height={250}
    />
    

    <Carousel.Caption>
      <h3>Build Web application in php</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Images/microsoft.jpg').default}
      // src="https://picsum.photos/seed/picsum/200/300"
      alt="Third slide"
      width={10}
      height={250}
    />

    <Carousel.Caption>
      <h3>Microsoft Azure certificate </h3>
    </Carousel.Caption>
  </Carousel.Item>

{/* Fourth slide */}

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Images/financialMarket.jpg').default}

      // src="https://picsum.photos/seed/picsum/200/300"
      alt="Third slide"
      width={10}
      height={250}
    />

    <Carousel.Caption>
      <h3>Financial Market Certificate </h3>
    </Carousel.Caption>
  </Carousel.Item>

  {/* Fifth Slide */}

  <Carousel.Item>
    <img
      className="d-block w-100"

      src={require('../Images/cppskillzcafe.jpg').default}

      // src="https://picsum.photos/seed/picsum/200/300"
      alt="Third slide"
      width={10}
      height={250}
    />

    <Carousel.Caption>
      <h3>C++ Certificate </h3>
    </Carousel.Caption>
  </Carousel.Item>


 {/* six slide */}

 <Carousel.Item>
    <img
      className="d-block w-100"

      src={require('../Images/webd.jpg').default}
      
      // src="https://picsum.photos/seed/picsum/200/300"
      alt="Third slide"
      width={10}
      height={250}
    />

    <Carousel.Caption>
      <h3>Web Development Certificate </h3>
    </Carousel.Caption>
  </Carousel.Item>

  {/* seven slide */}

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../Images/cppsololearn.jpg').default}
      
      // src="https://picsum.photos/seed/picsum/200/300"
      alt="Third slide"
      width={10}
      height={250}
    />

    <Carousel.Caption>
      <h3>Web Development Certificate </h3>
    </Carousel.Caption>
  </Carousel.Item>

  {/* <Carousel.Item>
    <img
    className="d-block w-100"
    src={require('../Images/financial.jpg').default}
    alt="Foruth slide"
    width={10}
    height={250}
    />
  </Carousel.Item> */}

</Carousel>
        </>
    )
}

export default CarsouleA;