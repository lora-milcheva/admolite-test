const Section = props => {

    const heading = props.content.heading
    const text = props.content.text

    return (
        <section className='section'>
            <h2 className='section__heading'>{heading}</h2>
            <p className='section__text'>{text}</p>
        </section>
    )
}

export default Section