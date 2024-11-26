import { useEffect, useRef } from "react"

function Dom() {

  const inputRef = useRef<HTMLInputElement>(null!)


  useEffect(() => {

    inputRef.current.focus()

  },[])


  return (
    <div>

      <h2>Form</h2>

      <input type="text" name="username" ref={inputRef}/>
      <input type="password" name="password"/>

    </div>
  )
}

export default Dom