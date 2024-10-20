import './Nav.css'
import Logo from '../../assets/Edge-pro-White-Logo.png'
import { memo, useCallback, useEffect, useState } from 'react'
import BurgerBar from '../BurgerBar/BurgerBar';

function Nav({ nav }) {
  
  //Change the active link
  let { navListActive, setNavListActive } = nav;

  // toogle burger button to show or hide nav list
  let [navListShow, setNavListShow] = useState(false);

  //specify if the nav scroll down or up to change style
  let [navScrollDown, setNavScrollDown] = useState(false);

  const navList = ['home', 'products', 'parteners', 'contact us'];

  // handle nav scroll to change style
  let navScrollStart = window.scrollY;

  const handleScrollNav = useCallback(() => {
    if (window.scrollY > navScrollStart) {
      setNavScrollDown(true);
      navScrollStart = window.scrollY;
    }
    else if (window.scrollY < navScrollStart) {
      setNavScrollDown(false);
      navScrollStart = window.scrollY;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav);
  }, []);


  return (
    <nav className=''>
      <div className='no-stack-context bg-blue-color' style={{ backgroundColor: navScrollDown ? '#326aa7db' : '' }}>
        <div className="container ">
          <div>
            <div className='logo'>
              <img src={Logo} alt="EDGE-Pro company logo" />
            </div>

            <ul className={`${navListShow ? 'show' : ''} list-unstyle`}>
              {navList.map((li, i) => <li key={i}>
                <a href={`#${li.split(' ').join('')}`} className={`${navListActive == i ? 'active' : ''}`} onClick={() => setNavListActive(i)}>
                  {li}
                </a>
              </li>)}
            </ul>

            <div className='burger-bar' onClick={() => setNavListShow(!navListShow)}>
              <BurgerBar></BurgerBar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}



export default memo(Nav);