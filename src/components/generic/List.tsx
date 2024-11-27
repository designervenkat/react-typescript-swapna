// type ListProps = {
//   items: string[] | number []
//   // onClick: (value: string | number) => void
// }

import React from "react"

type ListItems = {
  firstName: string
  lastName: string
}

type GenericsListProps<T> = {
  items: T[]
  renderItem? : (item: T) => React.ReactNode
}


export default function List<T extends string | number | ListItems>({items, renderItem}:GenericsListProps<T>) {
  return (
    <div>

      <h1>Generics List</h1>

      {items.map((item, i) => (
          <div key={i}>            
            {renderItem ? renderItem(item) : item.toString()}
          </div>
        ))
      }


      </div>
  )
}
