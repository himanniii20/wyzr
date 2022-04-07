import React from 'react';
import './Details.css'

const Details = ({show,item,onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return(
        <>
            <div className='overlay'>
                <div className='overlay-inner'>
                    <button className='close' onClick={onClose}></button>
                    <div className='inner-box'>
                        <img src={thumbnail} alt='' />
                        <div className='info'>
                            <h1>{item.volumeInfo.title}</h1>
                            <h6>{item.volumeInfo.subtitle}</h6>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4>
                            <h5>{item.volumeInfo.categories}</h5>
                            <h6>{item.saleInfo.country}</h6>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Details;