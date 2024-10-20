import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BurgerBar from "../BurgerBar/BurgerBar";
import './Drawer.css'

export default function Drawer() {

    let drawer = useRef();

    //toggle drawer to show or hide
    let [showDrawer, setShowDrawer] = useState(false);

    //create list items
    const handleLinks = useMemo(() => {
        let temp = [];
        for (let i = 0; i < 6; i++)
            temp.push(`link${i + 1}`);

        return temp;
    }, []);

    //handle close drawer with overlay function
    const closeDrawerWithOverlay = useCallback((e)=>{        
        if(!drawer.current.contains(e.target))
            setShowDrawer(false);
    });

    useEffect(()=>{
        document.addEventListener('click', closeDrawerWithOverlay);
    }, []);

    return (
        <>
            <div ref={drawer} className={`drawer ${showDrawer ? 'show' : ''} bg-dark-blue-color`}>
                <div onClick={() => setShowDrawer(!showDrawer)}>
                    <BurgerBar showDrawer={showDrawer}></BurgerBar>
                </div>
                <div className="bg-blue-color">
                    <ul className="list-unstyle">
                        {handleLinks.map((li, i) => <li key={i} className={`${showDrawer ? 'show' : ''}`} style={{ transitionDelay: showDrawer ? ` ${0.1 * i}s` : '' }}>
                            <a href="">
                                {li}
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>

            <div className={`overlay ${showDrawer?'show':''}`}></div>
        </>
    )
}
