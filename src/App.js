import "./App.css";
import React, {useState, useEffect} from 'react'
import SearchBox from './components/SearchBox'
import LocationContainer from "./components/LocationContainer";


const App = () => { 
  const [search, setSearch] = useState("");
 
     const handleSearch = (searchValue) => {
      setSearch(searchValue);
     }

     
     useEffect(() => {
      let randomNumber = Math.ceil(Math.random() * 108)
      console.log(randomNumber)
      setSearch(randomNumber.toString());
     }, []);

  return (
    <div className="App">
       
    <SearchBox onSearchLocation={handleSearch}/>
     {search && <LocationContainer search={search} />}

    </div>
  )
}

export default App