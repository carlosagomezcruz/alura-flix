import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import VideoCard from "../VideoCard";

const SliderComponent = (props) => {
    const { datosIniciales } = props;
    return <section className="slider">
        <div className="slider_content">
            <Slider centerMode={true} dots={true} speed={500} slidesToShow={4} slidesToScroll={1}>
                {
                    datosIniciales.map((video, index) => <VideoCard key={index} video={video} />)
                }
            </Slider>
        </div>
    </section>
}

export default SliderComponent;