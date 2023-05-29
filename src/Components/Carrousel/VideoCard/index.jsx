import { useContext } from 'react';
import { dataContext } from '../../../hooks/Context';
import './videocard.css';

const VideoCard = ({ data }) => {
    const { deleteVideos } = useContext(dataContext)
    return <>
        <div className="contenedor-video" >
            <img
                id={data.id}
                width="20"
                height="20"
                src="https://img.icons8.com/fluency/48/delete-forever.png"
                alt="delete"
                className="delete"
                onClick={(e) => { deleteVideos(e.target.id) }}
            />
            <img className="video" src={data.linkImgVideo} alt="img" />
        </div >
        <div style={{ color: "white", padding: "0 4%" }}>{data.descripcion}</div>
    </>
}

export default VideoCard;