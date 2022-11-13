import { useLocation } from 'react-router-dom'


const PrintButton = props => {
    const location = useLocation();

    const printPageName = () => {
        const pageName = location.pathname.substr(1)
        pageName.length > 0 ? console.log(pageName) : console.log('home');
    }

    return <button className='btn btn--default' onClick={printPageName}>Print Page Name</button>
}

export default PrintButton