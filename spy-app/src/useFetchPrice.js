import {useState} from 'react';

const useFetchPrice = (url) => {

    let [price, setPrice] = useState("...");

    setTimeout(() => {
        fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error('could not fetch the data');
        } else {
            return response.json();
        }
    })
    .then(data => {
        setPrice(data.price);
    })
    }, 1000)
    
    return price
}

export default useFetchPrice;
