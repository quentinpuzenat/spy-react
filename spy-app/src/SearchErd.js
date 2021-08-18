const SearchErd = ( {erdAddress, setErdAddress, handleSubmit}) => {

    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2" ></div>
                    <div className="col-8">
                        <form action="/" onSubmit={handleSubmit}>
                                <label htmlFor="erdInput" className="form-label"><h5>Provide an Elrond Address</h5></label>
                                <input 
                                    id="erdInput" 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="erd..."
                                    required
                                    value={erdAddress}
                                    onChange={(e) => {
                                        setErdAddress(e.target.value)
                                    }}
                                />
                        </form>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
     );
}
 
export default SearchErd;