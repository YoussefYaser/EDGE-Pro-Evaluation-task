import { memo, useEffect, useState } from 'react'
import './BurgerBar.css'

function BurgerBar({showDrawer}) {

    let [collapsed, setCollapsed] = useState({
        collapsed : true, 
        top : '', 
        bottom : '', 
        middle : 1
    });

    function changeAnimation(){
        if(collapsed.collapsed){
            setCollapsed({
                collapsed : false, 
                top : 'bar-top-forward', 
                bottom : 'bar-bottom-forward', 
                middle : 0
            });
        }
        else{
            setCollapsed({
                collapsed : true, 
                top : 'bar-top-backward', 
                bottom : 'bar-bottom-backward',
                middle : 1
            });
        }
    }

    useEffect(()=>{
        if(showDrawer == false){
            setCollapsed({
                collapsed : true, 
                top : 'bar-top-backward', 
                bottom : 'bar-bottom-backward',
                middle : 1
            });
        }
    }, [showDrawer]);


    return (
        <button id="burger-toggler" className="navbar-toggler collapsed" onClick={changeAnimation}>
            <div id="burger-bar">
                <span className="bar-top " style={{animationName : collapsed.top}} />
                <span className="bar-middle " style={{opacity : collapsed.middle}}/>
                <span className="bar-bottom " style={{animationName : collapsed.bottom}} />
            </div>
        </button>

    )
}


export default memo(BurgerBar);