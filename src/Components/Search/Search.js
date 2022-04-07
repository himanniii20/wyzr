import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'
import Card from '../Card/Card';

const Search = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (event) => {
            if(event.key === "Enter")
            {
                axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDzdpXup4TN72HxOumBNu54-ImXn43K2Cw'+'&maxResults=20')
                .then(res => setData(res.data.items))
                .catch(err=>console.log(err))
            }
    }
    return (
        <>
        <div className='main'>
            <h1>WELCOME TO WYZR!</h1>
            <div className="login-form">
                <div className='search'>
                    <h2>BookSearcH</h2>
                    <input type="text" placeholder='Enter Book Name'
                    value={search} onChange={ev => setSearch(ev.target.value)}
                    onKeyPress={searchBook}/>
                    <button>Search</button>
                </div>
            </div>
        </div>
        <div className='container'>
            {
                <Card book={bookData}/>
            }
        </div>
        </>
    );
}

export default Search;