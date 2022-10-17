import { useComapnyData } from "./use-about-data";

export const number0dp = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
});
export default function AboutPage() {
  const { data } = useComapnyData();

  return (
    <div className="bg-white mt-10 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.name}
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{data.summary}</p>
        </div>
        <div className="mt-12 ">
          <div className="mt-12 ">
            <div>
              <span>
                <span
                  className={
                    "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  }
                >
                  CEO and Founder
                </span>
              </span>
            </div>
            <span>
              <p className="text-xl font-semibold text-gray-900">{data.ceo}</p>
            </span>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex-shrink-0">
                <a href={data.ceo}>
                  <span className="sr-only">{data.ceo}</span>
                  <img
                    className="h-40 w-40 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Elon_Musk_%283017880307%29.jpg/512px-Elon_Musk_%283017880307%29.jpg"
                    alt="Elon Musk"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-20 ">
        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
          <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Valuation
            </dt>
            <dd className="order-1 text-3xl font-bold tracking-tight text-indigo-600">
              $ {number0dp.format(data.valuation)}
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Employees
            </dt>
            <dd className="order-1 text-3xl font-bold tracking-tight text-indigo-600">
              { number0dp.format(data.employees) }
            </dd>
          </div>
          <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Launch Sites
            </dt>
            <dd className="order-1 text-3xl font-bold tracking-tight text-indigo-600">
              { data.launch_sites }
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
