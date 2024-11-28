import React from "react"

// type HeadingProps = {
//   size: "text-sm" | "text-xl" | "text-2xl"
//   color?: "text-blue-700" | "text-slate-500"
//   children: React.ReactNode
//   as? : React.ElementType
// }


type HeadingProps<E extends React.ElementType> = {
  size: "text-sm" | "text-xl" | "text-2xl"
  color?: "text-blue-700" | "text-slate-500"
  children: React.ReactNode
  as? : E
}

type TextProps<E extends React.ElementType> = HeadingProps<E> & Omit<React.ComponentProps<E>, keyof HeadingProps<E>>


export const PolyHeading = <E extends React.ElementType = "div">({ size, color, children, as }: TextProps<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`${size} ${color}`}>
      {children}
    </Component>
  )

}