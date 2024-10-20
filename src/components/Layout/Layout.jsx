import './Layout.css'
import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import Footer from '../Footer/Footer';
import Drawer from '../Drawer/Drawer';
import Map from '../Map/Map';
import Parteners from '../Parteners/Parteners';
import { useCallback, useEffect, useRef, useState } from 'react';


export default function Layout() {

    let sections = useRef([]);

    //Change the active link
    let [navListActive, setNavListActive] = useState(0);

    //handle change navActive link automatically once its section has been scrolled
    const handleScrollingActiveLink = useCallback(() => {
        for (let i = 0; i < sections.current.length; i++) {
            if (window.scrollY > sections.current[sections.current.length - 1 - i].offsetTop - window.innerHeight) {
                setNavListActive(sections.current.length - 1 - i);
                break;
            }
        }
    }, []);

    useEffect(() => {
        handleScrollingActiveLink();
        window.addEventListener('scroll', handleScrollingActiveLink);
    }, [])

    return (
        <main className="layout" >
            <Nav nav={{ navListActive, setNavListActive }}></Nav>
            <Map ref={{ sections }}></Map>
            <Products ref={{ sections }}></Products>
            <Parteners ref={{ sections }}></Parteners>
            <Drawer></Drawer>
            <Footer ref={{ sections }}></Footer>

            <span className='reset-scroll bg-dark-blue-color xy-center' onClick={()=>window.scrollTo(0, 0)}>
                <i className="fa-solid fa-up-long" />
            </span>
        </main>
    )
}
