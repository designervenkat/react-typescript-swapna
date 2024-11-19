
type GreetingProps = {
  name?: string
  age?: number
}

export default function Greet({name = "Guest", age}: GreetingProps) {
  return (
    <h1>Hello, {name}, { age && <span>Age: {age}</span> }!</h1>
  )
}
