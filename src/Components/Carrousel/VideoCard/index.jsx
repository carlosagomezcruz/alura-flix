import './videocard.css';

const VideoCard = (props) => {
    const { video } = props;
    return <div className="contenedor-video">
        <img src={video.videoUrl} alt="img" />
    </div>
}

export default VideoCard;