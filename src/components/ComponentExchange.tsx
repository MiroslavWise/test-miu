import { useState } from "react"

import { cx } from "../utils/cx"
import { PERCENT_DATA } from "../constants/percent-data"
import { formatterRu, formatterRub } from "../helpers/intl"

function ComponentExchange() {
  const [value, setValue] = useState(1_100_000)
  const [state, setState] = useState(PERCENT_DATA[1])

  const indexState = PERCENT_DATA.indexOf(state)

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-row items-center justify-between text-base text-gray-400">
        <span className="font-normal text-start">Отдаёте (лот 1000)</span>
        <span className="font-normal text-end">Получаете (лот 1000)</span>
      </div>
      <div className="grid grid-cols-2 items-center gap-2">
        <div className="py-2 px-2 flex flex-col rounded-xl bg-white items-center">
          <span className="text-center text-gray-400 text-sm">Ethereum, ETH</span>
          <div className="w-full grid items-center grid-cols-[1.5rem_minmax(0,1fr)_1.5rem] gap-1">
            <a
              className="relative w-6 h-auto aspect-square rounded-full bg-gray-100"
              onClick={() =>
                setValue((prev) => {
                  return prev <= 10_000 ? prev : prev - 10_000
                })
              }
            >
              <Minus />
            </a>
            <span className="text-center text-base font-medium text-black">{formatterRu(value)}</span>
            <a className="relative w-6 h-auto aspect-square rounded-full bg-gray-100" onClick={() => setValue((prev) => prev + 10_000)}>
              <Plus />
            </a>
          </div>
        </div>
        <div className="py-2 px-2 flex flex-col rounded-xl bg-white items-center">
          <span className="text-center text-gray-400 text-sm">Рубль, RUR</span>
          <div className="w-full grid items-center grid-cols-[1.5rem_minmax(0,1fr)_1.5rem] gap-1">
            <a
              className="relative w-6 h-auto aspect-square rounded-full bg-gray-100"
              onClick={() =>
                setValue((prev) => {
                  return prev <= 10_000 ? prev : prev - 10_000
                })
              }
            >
              <Minus />
            </a>
            <span className="text-center text-base font-medium text-black">{formatterRub(value / 100)}</span>
            <a className="relative w-6 h-auto aspect-square rounded-full bg-gray-100" onClick={() => setValue((prev) => prev + 10_000)}>
              <Plus />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-1.5">
        {PERCENT_DATA.map((item, index) => (
          <div
            key={`::${item}-percent::`}
            className={cx("flex flex-col w-full items-center cursor-pointer")}
            onClick={() => setState(item)}
          >
            <div className={cx("w-full h-3 rounded-full", index <= indexState ? "bg-black" : "bg-white")} />
            <span className="text-center text-gray-400 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

ComponentExchange.displayName = "ComponentExchange"
export default ComponentExchange

const Minus = () => (
  <svg viewBox="0 0 24 24" fill="none" className="absolute inset-1 w-4  h-auto aspect-square">
    <path
      d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
      fill="black"
    />
  </svg>
)
const Plus = () => (
  <svg className="absolute inset-1 w-4 h-auto aspect-square" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
      fill="black"
    />
  </svg>
)
