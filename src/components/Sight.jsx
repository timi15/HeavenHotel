import React from 'react'
import { Carousel } from 'react-bootstrap'

export const Sight = (props) => {
    return (
        <div>

            <h3>{props.place}</h3>

            <Carousel style={{width:500}}>
                <Carousel.Item interval={5000} >
                    <img
                        className="d-block w-90 carousel"
                        src={props.pic1}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-90 carousel"
                        src={props.pic1}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-90 carousel"
                        src={props.pic1}
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>



            <p>{props.content}</p>

        </div>
    )
}
