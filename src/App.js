import './App.css';
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import Bizes from './components/Bizes'
function App() {
  const [bizes, setBizes] = useState([])
  const submitHandler = async (e, location) => {
    e.preventDefault()

    const resp = await axios.post("http://localhost:5000/api/v1", { location: location })

    setBizes(resp.data.businesses)
  }
  const findTheBottom = async (e, location) => {
    e.preventDefault()

    const resp = await axios.post("http://localhost:5000/api/v2", { location: location })

    setBizes(resp.data.businesses)
  }
  return (
    <div className="App">
      <SearchBar submitHandler={submitHandler} findTheBottom={findTheBottom} />
      { bizes.length > 0 ?
        <Bizes bizes={bizes} />
        :
        null
      }
    </div>
  );
}

export default App;
