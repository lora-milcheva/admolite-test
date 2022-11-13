import {Outlet} from "react-router-dom";
import PrintButton from "../components/PrintButton";


const Body = () => {
    return (
        <main className='main'>
            <Outlet/>
            <PrintButton/>
        </main>
    )
};

export default Body;