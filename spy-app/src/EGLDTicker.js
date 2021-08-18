import useFetchPrice from './useFetchPrice';

const EGLDTicker = () => {

    let price = useFetchPrice('https://api.elrond.com/economics', []);

    return (  
        <>
        Current Price of EGLD: { price } $
        </>
    );
}
 
export default EGLDTicker;