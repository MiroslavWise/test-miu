import { useState } from "react"

import type { TTypeValueCard } from "../types/navigate"
import { CARDS } from "../constants/cards"
import { cx } from "../utils/cx"

function ComponentListChanges() {
  const [state, setState] = useState<TTypeValueCard>("card")

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 flex flex-col gap-3">
        <div className="w-full grid grid-cols-2 gap-2">
          {CARDS.map(({ label, value }) => (
            <div
              key={`::${value}-card::`}
              className="w-full grid grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-2"
              onClick={() => setState(value)}
            >
              <div
                className={cx(
                  "w-5 h-auto aspect-square relative rounded-full transition-all flex items-center justify-center",
                  state === value ? "border-0 bg-yellow-500" : "border-2 border-black bg-transparent",
                )}
              >
                <div
                  className={cx(
                    "flex h-auto aspect-square rounded-full bg-black transition-all",
                    state === value ? "w-3 opacity-100" : "w-0 opacity-0",
                  )}
                />
              </div>
              <span className="text-sm text-black font-medium">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-[minmax(0,1fr)_1.5rem]">
          <span className="text-base font-medium text-black">Номер карты</span>
          <div className="relative w-6 h-auto aspect-square">
            <IconChange />
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="w-full grid grid-cols-[minmax(0,1fr)_1.5rem]">
          <span className="text-base font-medium text-black">ФИО владельца</span>
          <div className="relative w-6 h-auto aspect-square">
            <IconChange />
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3">
        <div className="w-full grid grid-cols-[minmax(0,1fr)_1.5rem]">
          <span className="text-base font-medium text-black">Адрес</span>
          <div className="relative w-6 h-auto aspect-square">
            <IconChange />
          </div>
        </div>
      </div>
    </div>
  )
}

ComponentListChanges.displayName = "ComponentListChanges"
export default ComponentListChanges

const IconChange = () => (
  <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none">
    <path
      d="M21.3113 6.87858L17.1216 2.68983C16.9823 2.5505 16.8169 2.43998 16.6349 2.36458C16.4529 2.28918 16.2578 2.25037 16.0608 2.25037C15.8638 2.25037 15.6687 2.28918 15.4867 2.36458C15.3047 2.43998 15.1393 2.5505 15 2.68983L3.43969 14.2501C3.2998 14.3889 3.18889 14.5541 3.11341 14.7362C3.03792 14.9182 2.99938 15.1134 3.00001 15.3105V19.5001C3.00001 19.898 3.15804 20.2795 3.43935 20.5608C3.72065 20.8421 4.10218 21.0001 4.50001 21.0001H20.25C20.4489 21.0001 20.6397 20.9211 20.7803 20.7805C20.921 20.6398 21 20.4491 21 20.2501C21 20.0512 20.921 19.8605 20.7803 19.7198C20.6397 19.5792 20.4489 19.5001 20.25 19.5001H10.8113L21.3113 9.00014C21.4506 8.86085 21.5611 8.69547 21.6365 8.51346C21.7119 8.33145 21.7507 8.13637 21.7507 7.93936C21.7507 7.74235 21.7119 7.54726 21.6365 7.36525C21.5611 7.18324 21.4506 7.01787 21.3113 6.87858ZM12.75 7.06045L14.3147 8.62514L6.37501 16.5648L4.81032 15.0001L12.75 7.06045ZM4.50001 19.5001V16.8105L7.18969 19.5001H4.50001ZM9.00001 19.1898L7.43626 17.6251L15.375 9.68545L16.9397 11.2501L9.00001 19.1898ZM18 10.1898L13.8113 6.00014L16.0613 3.75014L20.25 7.93983L18 10.1898Z"
      fill="black"
    />
  </svg>
)
