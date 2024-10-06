import { Greeting } from "./components/TS/Props"
import { State } from "./components/TS/State"

export const App = () => {
  return (
    <>
    {/* <Greeting name="Sohail " /> */}
    <Greeting name="Sohail Shaikh" age={22} />
    <State />
    </>
  )
}
