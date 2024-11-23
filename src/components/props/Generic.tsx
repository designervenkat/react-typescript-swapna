import React from "react"

type ListProps<T> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export default function GenericList<T,>({items, renderItem}: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}