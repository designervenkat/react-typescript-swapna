
import { PolyHeading } from "./components/polymorphic/PolyHeading"



function App() {
  return (
    
    <div className="h-screen w-screen bg-slate-950 text-slate-300 grid place-content-center">

      <h1 className="my-10 text-base">React TypeScript</h1>

      {/* <Counter message="TS"/> */}


      {/* <PrivateComponent isLoggedIn component={Profile} /> */}

      {/* <Number value={2} isZero />
      
      <List items={["A", "B", "C"]} />

      <List items={[1, 2, 3]} />
      
      <List items={[
        {firstName: "Superman", lastName: "Bruce Wayne"},
        {firstName: "Flash", lastName: "Alan"},
        {firstName: "WonderWomen", lastName: "Alex"},
      ]} /> */}

      {/* Today */}
      
      {/* <Status status="loading" />

      <Toast position="center" /> */}
      
      {/* <CustomButton
        variants="ghost"
        onClick={() => console.log("buttonclicked")          
      }>
        Send
      </CustomButton> */}


      <PolyHeading as={"h1"} type="" size="text-xl" color="text-blue-700"> 

        This is heading

      </PolyHeading>

       <PolyHeading as={"a"}  href="#" size="text-xl" color="text-blue-700"> 

        This is anchor tag

      </PolyHeading>

      <PolyHeading size="text-xl"  color="text-blue-700"> 

        Not Provided AS key

      </PolyHeading>


      <PolyHeading as="button" type="reset" size="text-xl"  color="text-blue-700"> 

        Button

      </PolyHeading>


      <PolyHeading as="input" type="password" size="text-xl"  color="text-blue-700"> 

        Button

      </PolyHeading>


     
       

    </div>
    
  )
}

export default App