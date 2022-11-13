import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


// Layout
import Header from './layout/Header';
import Body from "./layout/Body";
import Footer from './layout/Footer';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <Header/>

                <Routes>
                    <Route path="/" element={<Body/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="gallery" element={<Gallery/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>

            </BrowserRouter>

            <Footer/>

        </div>
    );
}

export default App;
