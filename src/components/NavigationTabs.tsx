import { useState } from "react"
import type { INavigateButton } from "../types/navigate"
import { cx } from "../utils/cx"

interface IProps {
  values: INavigateButton[]
}

function NavigationTabs(props: IProps) {
  const { values } = props
  const [state, setState] = useState(values[0].value)

  return (
    <nav className="w-full flex flex-row whitespace-nowrap gap-2 font-normal">
      {values.map(({ label, value }) => (
        <a
          key={`::${value}-nav::`}
          className={cx(
            "text-base px-4 py-2.5 rounded-xl cursor-pointer transition-colors",
            state === value ? "bg-black text-white!" : "bg-white text-black!",
          )}
          onClick={() => setState(value)}
        >
          <span className="">{label}</span>
        </a>
      ))}
    </nav>
  )
}

NavigationTabs.displayName = "NavigationTabs"
export default NavigationTabs
