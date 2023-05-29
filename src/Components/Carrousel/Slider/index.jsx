import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import Slider from "react-slick";
import VideoCard from "../VideoCard";


export default class SliderComponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: false
        };


        return (
            <div className="slider">
                <div className="slider_content">
                    <Slider {...settings}>
                        {
                            this.props.videos.map((video) => {
                                console.log("Hola")
                                return <VideoCard key={video.id} data={video} />
                            })
                            
                        }
                        
                    </Slider>
                </div>
            </div >
        );
    }
}
