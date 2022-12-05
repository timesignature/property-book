import {useQuery} from "react-query";
import http from "../http";



export default function useOptions(){
    return useQuery(['products'],()=>http.get('/products').then(res=>res.data))
}