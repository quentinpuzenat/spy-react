const DisplayedInfos = ({allData}) => {
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex justify-content-center">
                    <ul className="list-group">
                        <li className="list-group-item bg-dark text-white">
                            <strong>Address:</strong> {allData.address}
                        </li>
                        <li className="list-group-item">
                            <strong>Herotag: </strong>{allData.hasOwnProperty('username')? allData.username: "No herotag provided"}
                        </li>
                        <li className="list-group-item">
                            <strong>Balance:</strong> {(allData.balance / 1e18).toLocaleString("en-US")} EGLD
                        </li>
                        <li className="list-group-item">
                            <strong>Number of transactions: </strong>{allData.txCount}
                        </li>
                        {/* <li className="list-group-item">{JSON.stringify(allData)}</li> */}
                    </ul>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        </>
     );
}
 
export default DisplayedInfos;