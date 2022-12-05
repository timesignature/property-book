import {useQuery} from "react-query";
import http from "../http";



export default function usePricing(){
    return useQuery(['products'],()=>http.get('/products').then(res=>res.data))
}