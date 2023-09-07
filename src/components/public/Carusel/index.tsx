import React, {useState} from "react";
import "./styled.scss";
import {CaruselImageType} from "../../../configs/types";

const CaruselImage:React.FC<{data: CaruselImageType}> = ({data}) => {
    return (
        <div className='carusel-image-container'>
            <div className='carusel-image'>
                <img src={data.image}></img>
            </div>
            <h2>{data.title}</h2>
        </div>
    )
}
const Carusel:React.FC<{photos: CaruselImageType[]}> = ({photos}) => {
    const [current, setCurrent] = useState(0);

    function previousPhoto() {
        if(current <= 0){
            setCurrent(photos.length-1);
        }
        else
            setCurrent(current-1);
    }
    function nextPhoto() {
        if(current >= photos.length-1){
            setCurrent(0);
        }
        else
            setCurrent(current+1);
    }

    function getPhotoIndex(index: number) {
        var diff = index;
        while(diff > photos.length - 1){
            diff -= photos.length;
        }
        return diff;
    }

    return (
        <div className='carusel-content'>
            <button className='previous-button' onClick={previousPhoto} title="Previous">&lt;</button>
            <div className='carusel-images'>
                <CaruselImage data={photos[current]}/>
                <CaruselImage data={photos[getPhotoIndex(current+1)]}/>
                <CaruselImage data={photos[getPhotoIndex(current+2)]}/>
            </div>
            <button className='next-button' onClick={nextPhoto} title="Next">&gt;</button>
        </div>
    );
}
export default Carusel;