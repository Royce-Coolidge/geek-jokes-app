import { DateTime } from "luxon";
import { Tabs } from "../common/tabs";
import LaunchesPage from "../launches";
import { useLatestLaunchData } from "./use-latest-launch-data";

export default function Home() {
  const { data } = useLatestLaunchData();

  if (!data) {
    return null;
  }

  data.sort((a, b) => b.date_local.localeCompare(a.date_local));
  const today = DateTime.utc().startOf("second");
  const upcoming = data.filter(
    (launch) => DateTime.fromISO(launch.date_local) > today
  );
  const successful = data.filter((launch) => launch.success === true);
  const failed = data.filter((launch) => launch.success === false);

  const next_launch = upcoming.pop();

  let tabs = [
    {
      id: 0,
      title: "All",
      content: <LaunchesPage data={data} next={next_launch} />,
    },
    {
      id: 1,
      title: "Upcoming",
      content: <LaunchesPage data={upcoming} />,
    },
    {
      id: 2,
      title: "Successful",
      content: <LaunchesPage data={successful} />,
    },
    {
      id: 3,
      title: "Failed",
      content: <LaunchesPage data={failed} />,
    },
  ];

  return <Tabs tabs={tabs} />;
}
