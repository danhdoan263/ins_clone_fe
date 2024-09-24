import React, { useEffect, useRef } from 'react'
import './StorySection.css'
import account from 'assets/account.png'
const StorySection = () => {

    const scroll_x = useRef(null);
    useEffect(
        () => {
            const scrollStory = scroll_x.current;
            const handleWheel = (evt) => {
                evt.preventDefault();
                scrollStory.scrollLeft += evt.deltaY;

            };
            scrollStory.addEventListener('wheel', handleWheel);
            return () => {
                scrollStory.removeEventListener('wheel', handleWheel);
            }
        }, []
    )

    return (
        <>

            <div className='Story-section'>
                <div className="Story" ref={scroll_x}>
                    <div className="item">
                        <img src={account} alt="" />
                    </div>
                    <div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div>
                    <div className="item">
                        <img src={account} alt="" />
                    </div>
                    <div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div><div className="item">
                        <img src={account} alt="" />
                    </div>
                </div>
                <div className="icon-chevron-right"></div>

            </div>

        </>

    )
}

export default StorySection