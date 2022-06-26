
import {Card, Button} from 'react-bootstrap';

function CardB(){

    const cardInfo=[
        {image: " https://picsum.photos/id/870/200/300?grayscale&blur=2", title: " HTML ", text: "READ "},
        {image: " https://picsum.photos/200/300/?blur", title: " CSS ", text: "READ "},
        {image: " https://picsum.photos/200/300", title: " JAVA SCRIPT ", text: " READ"},
      ]
      const renderCard = (card, index)=>{
        return(
      <Card style={{ width: '18rem' }} key={index} className="Box">
        <Card.Img variant="top" src="holder.js/100px180"  />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
           {card.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        );
      }      

    return(
        <>
        {cardInfo.map(renderCard)}
        </>
    );
}

export default CardB;