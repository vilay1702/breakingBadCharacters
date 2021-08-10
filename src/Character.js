import { useParams } from "react-router-dom"
import axios from "axios";
import React, {useState, useEffect} from 'react'
import Loading from "./Loading";
import Background from './Background';

const ShowData = ({data}) => {
    console.log(data);
    return (
        <h1>{data[0].name}</h1>
    );
}

const Character = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    
    const getData = async () => {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <section>
            <Background/>
            {isLoading? <Loading/> : <ShowData data={data}/>}
        </section>
    )
}

export default Character
