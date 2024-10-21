import React,{useState} from "react";
import {Col, Card, CardImgOverlay, CardImg, CardTitle, CardBody, CardColumns} from "reactstrap"

const CommanderFound = ({card}) => {

    const [life, setLife] = useState(40);

    //functions for increasing and decreasing life total.
    const decreaseLife = () => setLife(life - 1);
    const increaseLife = () => setLife(life + 1);

    return(
        <Col sm="3">
            <Card className="text-center userGameboard">
                <CardImgOverlay>
                    <CardImg 
                        alt=""
                        src={card.image_uris.art_crop}
                        width="100%"
                    />
                    <CardTitle tag="h3">{card.name}</CardTitle>
                    <CardBody>
                        <div className="life">
                            <button onClick={decreaseLife}>-</button> {life} <button onClick={increaseLife}>+</button>
                        </div>
                    </CardBody>
                </CardImgOverlay>
            </Card>
        </Col>
    )
}

export default CommanderFound;