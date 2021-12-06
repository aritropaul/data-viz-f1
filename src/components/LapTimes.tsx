import React, { Fragment, useState } from 'react';

import { Listbox, Transition, Tab } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import { Time } from './Time';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const circuits = [
  {
    name: 'Circuit De Monaco',
    id: 'monaco',
    info: 'Circuit de Monaco is a very famous street circuit that has hosted Grand Prixs since 1929. Arguably one of the least safe circuits, Monaco passes through the streets of Monte Carlo. It takes about six weeks to build the circuit and then three weeks to dismantle it. You’d find many celebrities and stars from around the world in the paddock and grandstands during a typical Monaco Grand Prix weekend.',
  },
  {
    name: 'Circuit De Spa-Francorchamps',
    id: 'spa',
    info: 'Circuit de Spa-Francorchamps located in Belgium first hosted a Grand Prix in 1929 and became a staple circuit in 1985. Spa was regarded as one of the fastest and most dangerous circuits leading to F1 drivers boycotting it at one point. After safety upgrades and layout changes, the circuit was brought back in 1983. And while the current circuit is much safer, it has managed to retain its original charm.',
  },
  {
    name: 'Autodromo Nazionale di Monza',
    id: 'monza',
    info: 'Autodromo Nazionale di Monza has a rich history in Formula 1. Known as the fastest circuit in F1, the Italian track is very simplistic in nature. On a Monza Grand Prix weekend, cars are set up to have the lowest drag to fly past with great speed.',
  },
  {
    name: 'Marina Bay Street Circuit',
    id: 'marinabay',
    info: 'The Marina Bay Street Circuit is located in Singapore. The uniqueness of this circuit is that due to high temperature and humidity, it hosts a night race. Initially having a lot of bumps, the circuit had to be modified to avoid damage to the cars and drivers. Now, the circuit hosts one of the most enthralling races.',
  },
  {
    name: 'Red Bull Ring',
    id: 'redbull',
    info: 'Located in Austria, Red Bull Ring is situated in the mountains and is one of the most scenic circuits on the calendar. It is the home track for the Red Bull team. The weather always plays a part in making this race interesting.',
  },
];

const years = [2014, 2015, 2016, 2017, 2018, 2019];

const LapTimes = () => {
  const [selectedCircuit, setSelectedCircuit] = useState(circuits[0]);

  return (
    <div>
      <Listbox value={selectedCircuit} onChange={setSelectedCircuit}>
        <div className="mt-1 w-80 mx-auto">
          <Listbox.Button className="relative w-80 mx-auto py-2 pl-3 pr-10 text-center bg-white/[0.12] rounded-lg shadow-md cursor-default sm:text-sm text-white font-semibold">
            {selectedCircuit !== undefined && (
              <span className="block truncate">
                {selectedCircuit.name || ''}
              </span>
            )}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-80 py-1 mt-1 overflow-auto text-base bg-black rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {circuits.map((circuit, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-white bg-amber-100' : 'text-white'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={circuit}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {circuit.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? 'text-yellow-600' : 'text-yellow-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className="w-[400]">
        <p className="font-medium text-md text-gray-600 mt-8">
          {selectedCircuit?.info}
        </p>
      </div>
      <div className="w-[400] mx-auto px-12 py-12 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {years.map((year) => {
              return (
                <Tab
                  key={year}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                      'focus:outline-none  ring-white ring-opacity-60',
                      selected
                        ? 'bg-white/[0.12] shadow'
                        : 'text-white hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {year}
                </Tab>
              );
            })}
          </Tab.List>
          {selectedCircuit !== undefined && (
            <Tab.Panels>
              {years.map((year) => {
                return (
                  <Tab.Panel key={year}>
                    <Time id={selectedCircuit.id} year={year}></Time>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
  );
};

export { LapTimes };
