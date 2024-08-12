import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../images/cinema2.jpeg';
import img2 from '../images/cinema3.jpeg';
import img3 from '../images/cinema4.jpeg';
const MovieCarousel = ({ movies }) => {
    return (
        <Carousel>
           
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={img1}
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Movie 1</h3>
                        <p>Hello Movie 1</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={img2}
                        
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Movie 2</h3>
                        <p>Hello Movie 2</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={img3}
                       
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Movie 3</h3>
                        <p>hello movie 3</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            
        </Carousel>
    );
};

export default MovieCarousel;
