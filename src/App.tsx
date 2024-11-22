import Login from "./components/states/Login"
import LoginUser from "./components/states/LoginUser"
import User from "./components/states/User"

function App() {
  return (
    
    <div className="h-screen w-screen bg-slate-950 text-slate-300 grid place-content-center">

      <h1 className="my-10 text-base">React TypeScript</h1>

      {/* Default */}
      {/* <Login /> */}

      {/* setting and type future values */}
      {/* <LoginUser /> */}

      {/* Type Assertion */}
      <User />


    </div>
    
  )
}

export default App