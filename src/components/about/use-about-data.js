import { useQuery } from "@tanstack/react-query"
import axios from "axios"


export function useComapnyData() {
    const fetchCompanyData = () => axios.get("https://api.spacexdata.com/v4/company").then((res) => res.data)
    const company = useQuery(["company"], fetchCompanyData, { initialData: [] })
    return company
}