import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useHistoryData() {
    const fetchHistory = () => axios.get("https://api.spacexdata.com/v4/history").then((res) => res.data)
    const history = useQuery(["history"], fetchHistory, { initialData: [] })
    return history
}