import { useEffect } from "react";
import { useState } from "react";
import DisplayedInfos from "./DisplayedInfos";

const AddressInfos = ({erdAddress, parentCallback}) => {

    let [allData, setAllData] = useState([]);

    useEffect( () => {
        setTimeout(() => {
            fetch(`https://api.elrond.com/accounts/${erdAddress}`)
        .then(response => {
                return response.json();
        })
        .then( data => {
            setAllData(data)
            parentCallback(data)
        });
        }, 500)
    }, [erdAddress, parentCallback])
    
    return ( 
        <DisplayedInfos allData={allData} />
     );
}
 
export default AddressInfos;