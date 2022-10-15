import clsx from "clsx";
import { Tab } from "@headlessui/react";

export function Tabs({ tabs, label, onChange, defaultIndex = 0 }) {
  return (
    <Tab.Group onChange={onChange} defaultIndex={defaultIndex}>
      <div className="border-b border-gray-200">
        <div className="sm:flex sm:items-baseline">
          {label ? (
            <h3 className="text-xl font-medium leading-6 text-gray-900">
              {label}
            </h3>
          ) : null}
          <div className={clsx(label && "sm:ml-10", "mt-4 sm:mt-0")}>
            <Tab.List className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    clsx(
                      selected
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap border-b-2 py-4 px-1 font-medium"
                    )
                  }
                >
                  {tab.title}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>
      </div>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.id}>
            <div className="mt-8">{tab.content}</div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
