import './Footer.css'
import Logo from '../../assets/Edge-pro-White-Logo.png'
import { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'

const Footer = forwardRef(function Footer(props, {sections}) {


    let footer = useRef();

    // set if the footer scrolled or not
    let [scrolledFooter, setScrolledFooter] = useState(false);

    const handleFooterScroll = useCallback(() => {
        if (window.scrollY > footer.current.offsetTop - window.innerHeight + 50) {
            setScrolledFooter(true);
        }
    }, []);

    useEffect(() => {        
        sections.current[3] = footer.current;
        window.addEventListener('scroll', handleFooterScroll);
    }, []);

    return (
        <footer  ref={footer} id='contactus' className=' bg-blue-color'>
            <div className="container">
                <div style={{ opacity: scrolledFooter ? '1' : '0', top: scrolledFooter ? '0' : '100px' }}>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <form>
                        <div className='contact-input'>
                            <input type="email" placeholder='Enter your mail' />
                            <button type='submit' className='bg-dark-blue-color'>submit</button>
                        </div>
                    </form>
                    <ul className='list-unstyle'>
                        <li>Building no.234 , 2nd District , 5th Settlement , New Cairo</li>
                        <li>Tel : 02-28107522</li>
                        <li>Fax: 02- 28107523</li>
                    </ul>
                    <div className='contact-links'>
                        <ul className='list-unstyle'>
                            <li className=' xy-center bg-dark-blue-color'>
                                <i className="fa-brands fa-facebook-f" />
                            </li>
                            <li className=' xy-center bg-dark-blue-color'>
                                <i className="fa-brands fa-linkedin-in" />
                            </li>
                            <li className=' xy-center bg-dark-blue-color'>
                                <i className="fa-brands fa-youtube" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
})


export default memo(Footer);