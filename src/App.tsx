import List from "./components/generic/List"
import Number from "./components/restrict/Number"


function App() {
  return (
    
    <div className="h-screen w-screen bg-slate-950 text-slate-300 grid place-content-center">

      <h1 className="my-10 text-base">React TypeScript</h1>

      {/* <Counter message="TS"/> */}


      {/* <PrivateComponent isLoggedIn component={Profile} /> */}

      <Number value={2} isZero />
      
      <List items={["A", "B", "C"]} />

      <List items={[1, 2, 3]} />
      
      <List items={[
        {firstName: "Superman", lastName: "Bruce Wayne"},
        {firstName: "Flash", lastName: "Alan"},
        {firstName: "WonderWomen", lastName: "Alex"},
      ]} />

    </div>
    
  )
}

export default App