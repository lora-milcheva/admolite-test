
const Card = props => {

    const {name, title, text, place} = props.data

    const setImage = () => {
        props.showImage(name)
    }

    return (
        <div className='card' onClick={setImage}>
            <div className='card__image'>
                <img src={require('../assets/images/' + name)} alt={name}/>
            </div>
            <div className='card__body'>
                <h3 className='card__title'>
                    {title}
                </h3>
                <p className='card__text'>
                    {text}
                </p>
                <p className='card__place'>
                    {place}
                </p>
            </div>
        </div>
    )
}

export default Card