// union types
type ButtonProps = {
  type: "submit" | "reset" | "button"
  label: string
  color: "bg-green-200" | "bg-red-200" | "bg-orange-300"
}

export default function Button({type, label, color}: ButtonProps) {
  return (
    <button className={`${color} text-green-700 px-7 py-2 rounded-md`} type={type}>{ label} </button>
  )
}