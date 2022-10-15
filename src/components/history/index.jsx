import { useHistoryData } from "./use-history-data";


export default function HistoryPage() {

  const history = useHistoryData()

  console.log(history.data)

  return <div></div>;
}
