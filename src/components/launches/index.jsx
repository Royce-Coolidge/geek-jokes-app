import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { DateTime } from "luxon";

export default function LaunchesPage({ data, next = null }) {

  return (
    <div>
      {next && (
        <div className="rounded-md my-3 bg-yellow-50 p-4 animate-pulse">
          <div className="flex">
            <div className="flex-shrink-0">
              <RocketLaunchIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 text-left">
              <h3 className="text-sm font-medium text-yellow-800">
                {` Next Launch on ${DateTime.fromISO(next.date_local)
                  .setZone("Europe/London")
                  .toLocaleString(DateTime.DATETIME_FULL)}`}
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{next.details}</p>
              </div>
              <div className="flex text-sm gap-1 border py-2 px-4 border-yellow-800 rounded-lg font-medium text-yellow-800">
                <h3 className="">
                  {` ${DateTime.fromISO(next.date_local)
                    .setZone("Europe/London")
                    .toRelative({ unit: ["hours"] })}, `}
                </h3>
                <h3 className="">
                  {` ${DateTime.fromISO(next.date_local)
                    .setZone("Europe/London")
                    .toRelative({ unit: ["minutes"] })
                    .slice(3)} and `}
                </h3>
                <h3 className="">
                  {DateTime.fromISO(next.date_local)
                    .setZone("Europe/London")
                    .toRelative({ unit: ["seconds"] })
                    .slice(3)}
                  
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flow-root">
        <ul className="-mb-8">
          {data.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8 ">
                {eventIdx !== data.length - 1 ? (
                  <span
                    className="absolute top-4 left-8 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div className="flex items-center py-4 dark:bg-transparent bg-white">
                    {event.links.patch.small ? (
                      <img
                        className="rounded-full w-16 h-16 "
                        src={event.links.patch.small}
                        alt=""
                      />
                    ) : (
                      <span className="rounded-full text-xs leading leading-tight flex justify-center items-center font-mono w-16 h-16 bg-gray-200">
                        No mission patch
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col items-start min-w-0 flex-1 justify-center pt-1.5">
                    <h1 className="font-mono text-lg dark:text-white">
                      {event.name}
                    </h1>

                    <div className="flex">
                      <span className="text-gray-500 font-mono">
                        {DateTime.fromISO(event.date_local)
                          .setZone("Europe/London")
                          .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}
                      </span>
                    </div>
                    <span
                      className={clsx(
                        event.success === null
                          ? "bg-blue-100 text-blue-800"
                          : event.success
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800",
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium "
                      )}
                    >
                      {event.success === null
                        ? "Upcoming"
                        : event.success
                        ? "Successful"
                        : "Failed"}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
