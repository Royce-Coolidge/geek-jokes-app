import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useGeekJokes() {
    const fetchJokes = () => axios.get("https://geek-jokes.sameerkumar.website/api?format=json").then((res) => res.data)
    const jokes = useQuery(["jokes"], fetchJokes, { initialData: [], enabled: false})
    return jokes
}