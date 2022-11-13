

const Banner = props => {

    return(
        <div className='banner'>
            <h1 className='banner__heading'>Expand your horizon</h1>
            <img src={require('../assets/images/gallery-01.jpg')} alt='banner' className='banner__image'/>
        </div>
    )

}

export default Banner