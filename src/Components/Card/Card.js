import React, {useState} from 'react';
import Details from '../Details/Details';

const Card = ({book}) =>{
    const [show, setShow]=useState(false);
    const [bookItem, setItem]=useState();
    return(
        <>
        {
            book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail !== undefined && amount !== undefined)
                {
                    return (
                        <>
                            <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' 
                            onClick={() => {setShow(true);setItem(item)}}>
                                <img alt='book' src={thumbnail} />
                                    <div>
                                        <h2>{item.volumeInfo.title}</h2> 
                                        <p>Rs.{amount}</p>
                                    </div>
                            </div>
                            <div>
                                <Details show={show} item={bookItem} onClose={() => setShow(false)}/>
                            </div>
                        </>
                    )
                }
                
            })
        }
        </>
    )
}


export default Card;