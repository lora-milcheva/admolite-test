import {useState} from "react";

// Constants
import CARDS_DATA from '../constants/galleryData.json'
import Card from "../components/Card";
import GalleryPreview from "../components/GalleryPreview";

const Gallery = props => {
    const IMAGES = CARDS_DATA.map(object => object.name);
    const [currentImage, setCurrentImage] = useState('');


    const showImage = (imageName) => {
        setCurrentImage(imageName)
    }

    const setNewImage = (direction) => {
        let index = IMAGES.indexOf(currentImage);

        const arrLength = IMAGES.length;

        if (direction === 'next') {
            if (index === arrLength - 1) {
                index = 0
            } else {
                index++
            }
        } else {
            if (index === 0) {
                index = arrLength - 1
            } else {
                index--
            }
        }

        showImage(IMAGES[index]);
    }

    const closePreview = () => {
        setCurrentImage('')
    }

    const cards = CARDS_DATA.map(card => {
        return <Card key={card.name} data={card} showImage={showImage}/>
    })

    return (
        <div className='container section'>
            <h1 className='heading-primary'> Gallery </h1>

            <div className='gallery'>
                {cards}
            </div>

            {currentImage &&
            <GalleryPreview image={currentImage}
                            setNewImage={setNewImage}
                            closePreview={closePreview}/>}
        </div>
    )
}

export default Gallery