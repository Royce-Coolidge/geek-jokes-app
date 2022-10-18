import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useLatestLaunchData() {
    const fetchLatest = () => axios.get("https://api.spacexdata.com/v5/launches").then((res) => res.data)
    const latest = useQuery(["latest"], fetchLatest, { initialData: [], refetchInterval: 1000})
    return latest
}