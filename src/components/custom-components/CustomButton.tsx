import React from "react"

type ButtonProps = {
  variants: 'primary' | 'secondary' | 'ghost' | 'outlined'
  // children: React.ReactNode // avoid these
  children: string
} & Omit <React.ComponentProps<'button'>, 'children'>
  
  export const CustomButton = ({variants, children, ...rest}: ButtonProps) => {
    return (
      <button className={`bg-${variants} text-${variants}`} {...rest}>

        {children}

      </button>
    )
  }