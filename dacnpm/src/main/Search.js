import React, {useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import '../App.css';
import { FilteringTable } from '../components/FiltertingTable'
function Search() {
  const [backtohome, setBacktohome] = useState(false);
  if (backtohome)
  {
    return <Navigate to = "/Home"/>;
  }
  return (
    <div className='App'>
       <div>
          <button className = "col- 12" class="btn btn-primary" type="submit" onClick ={() => {setBacktohome(true)}}> Back to home</button>
        </div>
    <FilteringTable />
   
  </div>
  
  )
}

export default Search