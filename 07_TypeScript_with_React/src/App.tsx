import { FormHandling } from "./components/TS/Events/FormHandling"
import { FormSubmit } from "./components/TS/Events/FormSubmit"
import { HandlingEvents } from "./components/TS/Events/HandlingEvents"
import { InputValidation } from "./components/TS/Events/InputValidation"
import { UseState } from "./components/TS/Hooks/UseState"
import { Greeting } from "./components/TS/Props"
import { State } from "./components/TS/State"

export const App = () => {
  return (
    <>
    {/* <Greeting name="Sohail " /> */}
    <Greeting name="Sohail Shaikh" age={22} />
    <hr />
    <State /> <br /> <br />
    <hr />
    <HandlingEvents />
    <hr />
    <FormHandling />
    <hr />
    <FormSubmit />
    <hr />
    <InputValidation />
    <hr />
    <UseState />
    </>
  )
}
