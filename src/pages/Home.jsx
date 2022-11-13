
// Components
import Banner from "../components/Banner";
import Section from "../components/Section";
import Card from "../components/Card";


// Constants
import {HOME_SECTION_ONE_CONTENT} from "../constants/constants";
import CARDS_DATA from '../constants/galleryData.json'


const Home = props => {

    const cards = CARDS_DATA.slice(-4).map(card => {
        return <Card key={card.name} data={card}/>
    })

    return (
        <div className='home'>
            <Banner/>
            <div className='container'>
                <Section content={HOME_SECTION_ONE_CONTENT}/>
                <section className='cards'>
                    {cards}
                </section>
            </div>
        </div>
    )
}

export default Home