
const GalleryPreview = props => {

    const imageName = props.image

    const showNextImage = () => {
        props.setNewImage('next')
    }

    const showPrevImage = () => {
        props.setNewImage('prev')
    }

    return (
        <div className='gallery__backdrop'>
            <div className='gallery__preview'>
                <img src={require('../assets/images/' + imageName)} alt={imageName}/>
                <div className='gallery__controls'>
                    <button className='btn btn--default' onClick={showPrevImage}>prev</button>
                    <button className='btn btn--default' onClick={showNextImage}>next</button>
                </div>

                <button id='close-btn' className='btn btn--default' onClick={props.closePreview}>Close</button>
            </div>
        </div>
    )
}

export default GalleryPreview