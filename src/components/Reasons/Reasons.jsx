import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" /><img src={image2} alt="" /><img src={image3} alt="" /><img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>some reason</span>
                <div><span className='stroke-text'>why</span><span> choose us?</span></div>
                <div className='details-r'> 
                <div><img src={tick} alt=""></img><span>Over 100+ users</span></div>
                <div><img src={tick}  alt="" /><span>Train Smarter n Faster</span></div>
                <div><img src={tick}  alt="" /><span>Free Programs for new members</span></div>
                <div><img src={tick}  alt="" /><span>Relaible Partners</span></div></div>
 <span  >Our Partner</span>
 <div className="partner"><img src={nb} alt="" /><img src={adidas} alt="" /><img src={nike} alt="" /></div>

            </div>
        </div>
    )
}

export default Reasons;
