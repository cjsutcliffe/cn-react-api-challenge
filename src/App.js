import React, { useState, useEffect } from "react";
import Modal from "./modal"
import './App.css'

const App = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [currentCountry, setCurrentCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        const response = await fetch('https://restcountries.com/v3.1/all/');
        
        if(!response.ok){
          throw new Error(response.statusText)
        }

        const data = await response.json();
        //sorts api data alphabettically by country common name and sets this as the countries
        setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
      } catch (error) {
        setErrorMsg("Well this is embarasing, something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  
  const handleClick = (country) => {
    setCurrentCountry(country);
    setShowModal(true)
  }  

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="pageWrapper">

      <h1>Countries of the World</h1>

   
      
      {/* map through data from API that is stored in the state */}
      
      <div className="imageWrapper">
        {countries
          // .sort((a, b) => a.country.name.commonname - b.country.name.common)
          .map((country, index) => {
          return (
            <div className="countryGrid">
            <h2 onClick={() => handleClick(country)}>{country.name.common}</h2>
            <img key={index} src={country.flags.png} alt={country.name.common} onClick={() => handleClick(country)} width="10%" />
            
            </div>
          )
        })}
            

            <div className="footer">
            Chris Sutcliffe 2023
            <br></br>
            <a onclick href="https://github.com/cjsutcliffe/cn-react-api-challenge">GitHub</a>
            <br></br>
            <a onclick href="https://restcountries.com/">API Documentation</a>
            <br></br>
            <a onclick href="https://restcountries.com/v3.1/all/">API endpoint: https://restcountries.com/v3.1/all/</a>
            </div>

      </div>



      {console.log(currentCountry)}
      {showModal && <Modal closeModal={setShowModal} country={currentCountry} />}
    </div>
  );
}

export default App;