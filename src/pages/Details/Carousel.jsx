import React from 'react';

const Carousel = ({image}) => {
    console.log(image);
    return (
        <div class="carousel-item">
            <img width={"auto"} height={"100%"} style={{maxHeight: "30vw"}} src={image} alt="slides"></img>
        </div>
    );
};

export default Carousel;