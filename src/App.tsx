import Button from "./components/Button"
import CardObject from "./components/CardObject"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Person from "./components/Person"
import { Status } from "./components/Status"

const personName = {
  firstName: "John",
  lastName: "Wakil"
}

// const person = [
//   {
//     id: 0,
//     title: "John",
//   },
//    {
//     id: 1,
//     title: "Azeez",
//   },
//     {
//     id: 2,
//     title: "Mich",
//   },
//      {
//     id: 3,
//     title: "Zeezco",
//   },
// ]

const person = ["ade", 1, null]


function App() {
  return (
    <>
      <Greet name="Azeez" job="dev" status="man" />
      <Person firstName={personName.firstName}  />
      <CardObject person={person} />
      <Status status="success" />
      <Heading>
        <p>I am header</p>
      </Heading>
      <Button onclick={(event) => console.log(event)} />
      <Input onChangeHandler={(e) => console.log(e.target)} />
    </>
  )
}

export default App
