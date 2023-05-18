import './videocard.css';

const VideoCard = ({ data }) => {
    return <>
        <div className="contenedor-video" >
            <img className="video" src={data.linkImgVideo} alt="img" />
        </div >

    </>
}

export default VideoCard;