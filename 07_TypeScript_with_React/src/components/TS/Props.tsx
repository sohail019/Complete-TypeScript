//? Ham ne ek type Alias banaya hai jo name aur age props ko define karta hai, name string type ka hai aur age number type ka hai.

type GreetingProps = {
  name:  string,
  age?:  number
}


// ? React.FC<GreetingProps>: ye specify karta hai ki Greet ek functional component hai jo GreetProps ko as a Prop receive karega

export const Greeting: React.FC<GreetingProps> = ({name, age}) => {

  return (
    <div>
      <h1>Props in TS</h1>
      <h4>Hello {name}, Your Age is {age}</h4>
    </div>
  )
}