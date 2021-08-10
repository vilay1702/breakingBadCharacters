import {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Loading from './Loading';
import logo from './images/logo.png';
import Background from './Background';

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const allCharacters = async () => {
    setIsLoading(true);
    const response = await axios.get('https://breakingbadapi.com/api/characters');
    setData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    allCharacters();
  }, [])
  
  return (
    <>
      <Background/>
      <div className="heading1">
        <div></div>
        <img className="logo" src={logo} alt="Logo" />
        <div></div>
      </div>
      {/* <Searchbar/> */}
      {isLoading ? <Loading/> : 
        <>
          <Pagination data={data}/>
        </>
      }
    </>
  );
}

export default Main;
