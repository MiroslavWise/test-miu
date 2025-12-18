export const formatterRu = (value: number) =>
  new Intl.NumberFormat("ru-RU", {
    useGrouping: true, // включить разделители тысяч
    minimumFractionDigits: 0, // минимальное количество дробных цифр
  }).format(value)

export const formatterRub = (value: number) =>
  new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
