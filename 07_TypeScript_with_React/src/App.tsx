import { FormHandling } from "./components/TS/Events/FormHandling"
import { FormSubmit } from "./components/TS/Events/FormSubmit"
import { HandlingEvents } from "./components/TS/Events/HandlingEvents"
import { InputValidation } from "./components/TS/Events/InputValidation"
import { AuthProvider, AuthStatus } from "./components/TS/Hooks/AuthContext"
import { WindowWidthComponent } from "./components/TS/Hooks/Custom/WindowWidthComponent"
// import { AuthProvider, AuthStatus } from "./components/TS/Hooks/UseContext"
import { UseEffect } from "./components/TS/Hooks/UseEffect"
import { UseRef } from "./components/TS/Hooks/UseRef"
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
    <hr />
    <UseEffect />
    <hr />
    <UseRef />
    <hr />
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
    <hr />
    <WindowWidthComponent />
    </>
  )
}
