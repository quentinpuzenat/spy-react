import { useEffect } from "react";
import { useState } from "react";
import DisplayedInfos from "./DisplayedInfos";

const AddressInfos = ({erdAddress, parentCallback}) => {

    let [allData, setAllData] = useState([]);

    useEffect( () => {
            fetch(`https://api.elrond.com/accounts/${erdAddress}`)
        .then(response => {
                return response.json();
        })
        .then( data => {
            setAllData(data)
            parentCallback(data)
        })
    }, [erdAddress, parentCallback])
    
    return ( 
        <>
        {
        allData.hasOwnProperty("message")?
        <>
        <h6>The address doesn't match</h6>
        <i className="bi bi-x-circle"></i>
        </>: // if condition true: the adress is unvalid
        <DisplayedInfos allData={allData} /> // else: address is valid and we display it
        }
        </>
        
     );
}
 
export default AddressInfos;