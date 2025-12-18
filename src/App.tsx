import { useState } from "react"

import NavigationTabs from "./components/NavigationTabs"
import ComponentExchange from "./components/ComponentExchange"
import CurrencyExchangeBar from "./components/CurrencyExchangeBar"
import ComponentListChanges from "./components/ComponentListChanges"

import { cx } from "./utils/cx"
import { NAVIGATE_BUTTONS } from "./constants/navigate-buttons"

function App() {
  const [state, setState] = useState(true)

  return (
    <main className="w-full flex flex-col items-center h-full">
      <section className="w-full max-w-190 p-4 bg-gray-100 flex flex-col gap-4">
        <h5 className="font-semibold text-black text-lg">Способ вывода</h5>
        <NavigationTabs values={NAVIGATE_BUTTONS} />
        <CurrencyExchangeBar />
        <h5 className="font-semibold text-black text-lg">Объёмы</h5>
        <ComponentExchange />
        <div className="w-full flex flex-row items-center justify-between">
          <h5 className="font-semibold text-black text-lg">Реквизиты</h5>
          <div className="grid grid-cols-[minmax(0,1fr)_1.25rem] gap-2 items-center text-base">
            <span className="text-end text-gray-400 font-normal whitespace-nowrap">Сохранить реквизиты</span>
            <div
              className={cx(
                "rounded-sm border w-full h-auto aspect-square relative border-yellow-500 transition-colors",
                state ? "bg-yellow-500" : "bg-gray-100 ",
              )}
              onClick={() => setState((prev) => !prev)}
            >
              <svg
                className={cx("absolute inset-0.5 w-auto h-auto aspect-square transition-opacity", state ? "opacity-100" : "opacity-0")}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5306 7.28049L9.53055 19.2805C9.4609 19.3502 9.37818 19.4055 9.28713 19.4433C9.19609 19.481 9.09849 19.5005 8.99993 19.5005C8.90137 19.5005 8.80377 19.481 8.71272 19.4433C8.62168 19.4055 8.53896 19.3502 8.4693 19.2805L3.2193 14.0305C3.07857 13.8898 2.99951 13.6989 2.99951 13.4999C2.99951 13.3008 3.07857 13.11 3.2193 12.9692C3.36003 12.8285 3.55091 12.7494 3.74993 12.7494C3.94895 12.7494 4.13982 12.8285 4.28055 12.9692L8.99993 17.6896L20.4693 6.21924C20.61 6.07851 20.8009 5.99945 20.9999 5.99945C21.199 5.99945 21.3898 6.07851 21.5306 6.21924C21.6713 6.35997 21.7503 6.55084 21.7503 6.74987C21.7503 6.94889 21.6713 7.13976 21.5306 7.28049Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <ComponentListChanges />
      </section>
    </main>
  )
}

export default App
