import React from 'react'
import { GaleriaElem } from './GaleriaElem';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"

export const Galeria = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1800 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1800, min: 1200 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1200, min: 900 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };
      
    return (
                <div className="galeria">
                    <Carousel responsive={responsive} autoPlay={true} arrows={false} autoPlaySpeed={2000}  infinite={true}   >
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1618773928121-c32242e63f39" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1519690889869-e705e59f72e1" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f" />
                        
                            <GaleriaElem url="https://plus.unsplash.com/premium_photo-1661505119522-22651550cd42" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1529169436040-836f3d93f0f8" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1584132905271-512c958d674a" />
                        
                            <GaleriaElem url="https://images.unsplash.com/photo-1590490360182-c33d57733427" />
                        
                    </Carousel>
                </div>
    )
}
