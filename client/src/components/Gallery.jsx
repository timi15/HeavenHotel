import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Gallery = () => {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1519690889869-e705e59f72e1',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f',
            title: 'Coffee',
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1661505119522-22651550cd42',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1529169436040-836f3d93f0f8',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1578898886615-0c4719f932dc',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1561049933-c7762dbc757e',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1522061634923-98236ee38c8d',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1512853431346-a61545d3f6e0',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1584132905271-512c958d674a',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
            title: 'Bike',
        },
    ];

    return (

        <div className="section" >
            <div className="container">
                <div className="row" style={{marginTop:30}}>
                    <div className="col-md-6">
                        <p>ie</p>
                    </div>
                    <div className="col-md-6">
                        <ImageList sx={{ width: "100%", height: 'auto' }} gap={10} cols={3} variant="masonry" rowHeight={164}>
                            {itemData.map((item) => (
                                <ImageListItem id="gallery" key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>
        </div>

    )
}
