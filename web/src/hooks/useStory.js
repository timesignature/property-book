import {useQuery} from "react-query";
import http from "../http";


export default function useStory(){
    return useQuery(['stories'],()=>http.get(`/stories`).then(res=>res.data))
}