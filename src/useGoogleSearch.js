import React,{useState,useEffect} from 'react'
import API_KEY from './key'


const CONTEXT_KEY = "e14d08c6a8d2f4583";

const useGoogleSearch = (term) => {
   const [data,setData] = useState(null)

    useEffect(()=>{
         const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res=>res.json())
            .then(result=>setData(result))
         }

         fetchData();
    },[term])

    return { data }
}

export default useGoogleSearch
