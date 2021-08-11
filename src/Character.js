import { useParams } from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect} from 'react'
import Loading from "./Loading";
import Background from './Background';
import { Link } from "react-router-dom";

const ShowData = ({data, quotes}) => { 
    return (
        <>
        <Link to="/"> <button className="backToHome"> Back to Home </button></Link>
        <section className="characterOuterDiv">
            <section className="characterDiv">
                <div className="img">
                    <img src={data.img} alt="img" />
                </div>
                <div className="details">
                    <table>
                        <tr>
                            <td><h2>Name</h2></td>
                            <td>:</td>
                            <td><h2>{data.name}</h2></td>
                        </tr>
                        <tr>
                            <td><h2>DoB</h2></td>
                            <td>:</td>
                            <td><h2>{data.birthday}</h2></td>
                        </tr>
                        <tr>
                            <td><h2>Occupation</h2></td>
                            <td>:</td>
                            <td> <h2>{data.occupation.map((occ)=>occ+" | ")}</h2></td>
                        </tr>
                        <tr>
                            <td><h2>Status</h2></td>
                            <td>:</td>
                            <td><h2>{data.status}</h2></td>
                        </tr>
                        {data.nickname && 
                            <tr>
                                <td><h2>Nickname</h2></td>
                                <td>:</td>
                                <td><h2>{data.nickname}</h2></td>
                            </tr>}
                        <tr>
                            <td><h2>Portrayed by</h2></td>
                            <td>:</td>
                            <td><h2>{data.portrayed}</h2></td>
                        </tr>
                        
                        <tr>
                            <td> <h2>Seasons</h2></td>
                            <td>:</td>
                            <td><h2>{data.appearance.map(app=>app+", ")}</h2></td>
                        </tr>
                    </table>                   
                </div>
            </section>
            {parseInt(quotes.length)===0? 
            <section className="quotes">
                <h1>No Quotes Available</h1>
            </section> : 
            <section className="quotes">
                <h1>Quotes</h1>
                {quotes.map((quote_a)=>{
                    const {quote_id, quote, author} = quote_a;
                    return (
                        <blockquote key={quote_id}>{quote}</blockquote>
                    );
                })}
            </section>
            }
        </section>
        </>
    );
}

const Character = () => {
    const [data, setData] = useState([]);
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id, name} = useParams();
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    const quotesUrl = `https://www.breakingbadapi.com/api/quote?author=${name.split('-')[0]}+${name.split('-')[1]}`;
    
    const getData = async () => {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
         
        const urlResponse = await axios.get(quotesUrl);
        setQuotes(urlResponse.data);

        setIsLoading(false);
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <section>
            <Background/>
            {isLoading? <Loading/> : <ShowData data={data[0]} quotes={quotes}/>}
        </section>
    )
}

export default Character
