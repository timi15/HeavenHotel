import React from 'react'
import { Box } from './Box';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"

export const Gallery = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    

    return (

        <div className="section" >
            <div className="container">
                <div className="row" style={{ marginTop: 30 }}>
                   
                        <div id="imgcontainer">
                            <Carousel responsive={responsive} autoPlay={true} arrows={false} autoPlaySpeed={3000}  pauseOnHover={true} draggable={true} infinite={true}   >
                                <div >
                                    <Box url="https://images.unsplash.com/photo-1618773928121-c32242e63f39"  />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1519690889869-e705e59f72e1" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f" />
                                </div>
                                <div>
                                    <Box url="https://plus.unsplash.com/premium_photo-1661505119522-22651550cd42" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1529169436040-836f3d93f0f8" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1578898886615-0c4719f932dc" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1561049933-c7762dbc757e" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1522061634923-98236ee38c8d" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1512853431346-a61545d3f6e0" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1584132905271-512c958d674a" />
                                </div>
                                <div>
                                    <Box url="https://images.unsplash.com/photo-1590490360182-c33d57733427" />
                                </div>
                            </Carousel>
                        </div>

                    




                </div>
            </div>

        </div>

    )
}
