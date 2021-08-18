import { useEffect, useState } from "react";

const AddressInfos = ({erdAddress}) => {

    let [balance, setBalance] = useState(0);
    let [address, setAddress] = useState("");
    let [allData, setAll] = useState([]);

    useEffect( () => {
        setTimeout(() => {
            fetch(`https://api.elrond.com/accounts/${erdAddress}`)
        .then(response => {
                return response.json();
        })
        .then( data => {
            setAddress(data.address);
            setBalance(data.balance);
            setAll(data)

        });
        }, 500)
    }, [erdAddress])

    
    
    return ( 
        <>
        <div className="col-2"></div>
        <ul className="list-group col-8 shadow-5">
            <li className="list-group-item bg-dark text-white">
                <strong>Address:</strong> {address}
            </li>
            <li className="list-group-item">
                <strong>Herotag: </strong>{allData.hasOwnProperty('username')? allData.username: "No herotag provided"}
            </li>
            <li className="list-group-item">
                <strong>Balance:</strong> {(balance / 1e18).toLocaleString("en-US")} EGLD
            </li>
            <li className="list-group-item">
                <strong>Number of transactions: </strong>{allData.txCount}
            </li>
            {/* <li className="list-group-item">{JSON.stringify(allData)}</li> */}
        </ul>
        <div className="col-2"></div>
        </>
     );
}
 
export default AddressInfos;