import Login from "./Login"
import { ProfileProps } from "./Profile"


type PrivatePros = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

export default function PrivateComponent({
  isLoggedIn,
  component: Component
}: PrivatePros) {
  if (isLoggedIn) {
    return <Component name="TS"/>
  } else {
    return <Login />
  }
}
