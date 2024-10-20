import './Parteners.css'
import skyline from '../../assets/sky-line-logo.svg'
import onyxSpace from '../../assets/OnyX-Space-logo-Full-Final-Black-1-1.png.webp'
import { forwardRef } from 'react'

const Parteners = forwardRef(function Parteners(props, {sections}) {

    return (
        <section ref={parteners=>sections.current[2] = parteners} id='parteners' className='parteners'>
            <div className="container">
                <div>
                    <h2 className='special-heading'>parteners</h2>
                    <div className="row">
                        <div className='partener-item'>
                            <div className="inner">
                                <div className='partener-info'>
                                    <h3>skyline</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse atque
                                        laborum praesentium quaerat? Deleniti qui ipsa, iste sit numquam illo suscipit inventore modi id.
                                        Natus aperiam praesentium veritatis et.
                                    </p>
                                    <button>read more</button>
                                </div>
                                    <div className='partener-logo'>
                                        <img src={skyline} alt="skyline logo" />
                                    </div>
                            </div>
                        </div>
                        <div className='partener-item'>
                            <div className="inner">
                                <div className='partener-info'>
                                    <h3>onyx space</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse atque
                                        laborum praesentium quaerat? Deleniti qui ipsa, iste sit numquam illo suscipit inventore modi id.
                                        Natus aperiam praesentium veritatis et.
                                    </p>
                                    <button>read more</button>
                                </div>
                                <div className='partener-logo'>
                                    <img src={onyxSpace} alt="onyXspace logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Parteners;