const Fiche = () => {
    return (  
        <>
        <div className="pop bg-white shadow-lg rounded">
            <div className="bubble p-3">
                <img src="/assets/img/tanjiro_pp.png" className='rounded-circle border border-3 border-white shadow-lg' alt="Twitter PP" width="120" height="120" />
            </div>
            <span className="ante text-secondary">Student in AI and CS</span>
            <div className="heading-container d-flex justify-content-center">
                <h3 className="p-1 border-bottom">Quentin Puzenat</h3>
            </div>
            <div className="row justify-content-center">
                <p className="col-8 m-3">I'm a French engineering student in Mathematics and Applied Statistics. Highly interested in Blockchain, AI, Computer science and Web development.  </p>
            </div>
            <div className="networks p-3">
                <a href="https://twitter.com/big_q__"  target="_blank" rel="noreferrer nofollow">
                  <img src="/assets/img/twitter.svg" alt="" width="30" height="30" className="col-2"/>
                </a>
                <a href="https://github.com/quentinpuzenat"  target="_blank" rel="noreferrer nofollow">
                  <img src="/assets/img/github.svg" alt="" width="30" height="30" className="col-2"/>
                </a>
            </div>
        </div>
        </>
    );
}
 
export default Fiche;