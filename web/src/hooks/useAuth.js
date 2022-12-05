import {useQuery} from "react-query";
import http from "../http";


export default function useAuth(){
    return useQuery(['user'],()=>http.get(`/user`).then(res=>res.data))
}