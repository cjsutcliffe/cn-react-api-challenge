import { useRef } from "react";

const Modal = (props) => {
    const modalRef = useRef();

    const handleClick = (e) => {
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }
    const handleCloseClick = (e) => {
        props.closeModal(false)
    }

    return (
        <div className="modalBackground" ref={modalRef} onClick={handleClick}>
            <div className="modalBox">
                <p className="closeIcon" onClick={handleCloseClick}>x</p>
                <div className="topSection">
                    <img src={props.country.flags.png} width="30px" alt={`Country Flag`} />
                    <img src={props.country.coatOfArms.svg} width="30px" alt={`Coat of Arms`} />
                    <div className="whiteGradient"></div>
                </div>
                <div className="bottomSection">                    
                    <h1>{props.country.name.common}</h1>                    
                    <p>Official Name: {props.country.name.official}</p>
                    <p>Capital City: {props.country.capital}</p>
                    {/* toLocaleString('en') adds comma seperators */}
                    <p>Population: {props.country.population.toLocaleString('en')}</p>
                    <p>Continent: {props.country.continents}</p>
                    <p>Top Level Domain: {props.country.tld}</p>
                    <p>In {props.country.name.common} they drive on the {props.country.car.side} hand side of the road</p>
                    <a style={{display: "mapButton"}} href={props.country.maps.googleMaps} target="_blank" rel="noreferrer"> Click for map</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;