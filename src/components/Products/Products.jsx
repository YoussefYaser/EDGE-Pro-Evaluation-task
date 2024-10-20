import './Products.css'
import gis from '../../assets/GIS image.jpeg'
import Photogrammetry from '../../assets/Photogrammetry image.jpg'
import remoteSensing from '../../assets/Remote-Sensing image.png'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'


const Products = forwardRef(function Products(props, {sections}) {

    //set a specfic img to be scaled
    let [hoverImg, setHoverImg] = useState(null);

    //hover img
    const handleHoverImg = useCallback((e) => {
        setHoverImg(e.currentTarget.getAttribute('data-index'));
    }, []);
    //leave img
    const handleLeaveImg = useCallback(() => {
        setHoverImg(null);
    }, []);

    //get all items to specify if the scroll get each item or not
    let productItems = useRef([]);

    //get how many scrolled items or last scrolled item index
    let [scrolledItem, setScrolledItem] = useState(0);

    const handleScrollToItem = useCallback(() => {
        for (let i = scrolledItem; i < productItems.current.length; i++) {
            if (window.scrollY > productItems.current[i].offsetTop - window.innerHeight + 30) {
                setScrolledItem(i + 1);
            }
        }
    }, [scrolledItem]);

    useEffect(() => {
        handleScrollToItem();
        window.addEventListener('scroll', handleScrollToItem);
        return () => {
            window.removeEventListener('scroll', handleScrollToItem);
        }
    }, [scrolledItem]);

    return (
        <section ref={products=>sections.current[1] = products} id='products' className=' products'>
            <div className="container">
                <div>
                    <p className='special-heading text-blue-color'>products</p>
                    <div className='row'>
                        <div ref={item => productItems.current[0] = item} className='product-item' style={{ opacity: scrolledItem > 0 ? '1' : '0', transform: scrolledItem > 0 ? 'scale(1)' : 'scale(0)' }}>
                            <div className="inner">
                                <div>
                                    <div data-index="0" className={`inner-img ${hoverImg == 0 ? 'scale' : ''}`} onMouseEnter={handleHoverImg} onMouseLeave={handleLeaveImg}>
                                        <img src={gis} alt="GIS photo" />
                                    </div>
                                    <h2 className=' text-blue-color'>GIS</h2>
                                    <p className='text-gray-color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et nesciunt deserunt tenetur temporibus quaerat quis eveniet expedita repellat, nostrum assumenda, autem blanditiis aliquid aut optio iure ducimus facilis quos.</p>
                                </div>
                                <button className='bg-blue-color'>read more</button>
                            </div>
                        </div>
                        <div ref={item => productItems.current[1] = item} className='product-item' style={{ opacity: scrolledItem > 1 ? '1' : '0', transform: scrolledItem > 1 ? 'scale(1)' : 'scale(0)' }}>
                            <div className="inner">
                                <div>
                                    <div data-index="1" className={`inner-img ${hoverImg == 1 ? 'scale' : ''}`} onMouseEnter={handleHoverImg} onMouseLeave={handleLeaveImg}>
                                        <img src={Photogrammetry} alt="Photogrammetry image photo" />
                                    </div>
                                    <h2 className=' text-blue-color'>Photogrammetry image</h2>
                                    <p className='text-gray-color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et nesciunt deserunt tenetur temporibus quaerat quis eveniet expedita repellat, nostrum assumenda, autem blanditiis aliquid aut optio iure ducimus facilis quos.</p>
                                </div>
                                <button className='bg-blue-color'>read more</button>
                            </div>
                        </div>
                        <div ref={item => productItems.current[2] = item} className='product-item' style={{ opacity: scrolledItem > 2 ? '1' : '0', transform: scrolledItem > 2 ? 'scale(1)' : 'scale(0)' }}>
                            <div className="inner">
                                <div>
                                    <div data-index="2" className={`inner-img ${hoverImg == 2 ? 'scale' : ''}`} onMouseEnter={handleHoverImg} onMouseLeave={handleLeaveImg}>
                                        <img src={remoteSensing} alt="Remote Sensing photo" />
                                    </div>
                                    <h2 className=' text-blue-color'>Remote Sensing</h2>
                                    <p className='text-gray-color'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem et nesciunt deserunt tenetur temporibus quaerat quis eveniet expedita repellat, nostrum assumenda, autem blanditiis aliquid aut optio iure ducimus facilis quos.</p>
                                </div>
                                <button className='bg-blue-color'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Products;