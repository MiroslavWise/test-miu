import type { TTypeValueCard } from "../types/navigate"

interface ICard {
  label: string
  value: TTypeValueCard
}

export const CARDS: ICard[] = [
  {
    label: "Номер карты",
    value: "card",
  },
  {
    label: "Номер договора",
    value: "contract",
  },
]
