// type NumbersProps = {

//   value: number
//   isPostive?: boolean
//   isNegative?: boolean
//   isZero?: boolean

// }

type NumbersProps = {
  value : number
}

type PositiveNumber = NumbersProps & {
  isPostive?: boolean
  isNegative?: never
  isZero?: never
}
type NegativeNumber = NumbersProps & {
  isNegative?: boolean
  isPostive?: never
  isZero?: never

}
type ZeroNumber = NumbersProps & {
  isZero?: boolean
  isPostive?: never
  isNegative?: never
}

type RandomNumber = PositiveNumber | NegativeNumber | ZeroNumber



const Number = ({value, isPostive, isNegative, isZero}: RandomNumber) => {
  return (
    <div>
      
      <h2>Number</h2>

      {value} {isPostive && "Positive"}
      {isNegative && "Negative"} {isZero && "Zero"}
    
    
    </div>
  )
}

export default Number