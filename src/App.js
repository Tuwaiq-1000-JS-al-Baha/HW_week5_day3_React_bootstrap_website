// import { useState } from "react"
// import TaskAdd from "./components/TaskAdd"
// import TaskInput from "./components/TaskInput"
// import TaskItem from "./components/TaskItem"
// import "./App.css"

// function App() {
//   const [text, setText] = useState("")
//   const [list, setList] = useState([])
//   const [editIndex, setEditIndex] = useState(null)
//   const [editvalue, setEditvalue] = useState("")

//   const addTask = () => {
//     // console.log(text)
//     setList([...list, text])
//     // console.log(list)
//     setText("")
//   }
//   const removeTask = e => {
//     const itemToRempve = e.target.id
//     setList(list.filter(item => item !== itemToRempve))
//   }
//   const editTask = e => {
//     const index = e.target.id
//     setEditIndex(index)
//     setEditvalue(list[index])
//   }
//   const confirmEdit = () => {
//     const newList = [...list]
//     newList[editIndex] = editvalue
//     setList(newList)
//     setEditIndex(null)
//     setEditvalue("")
//   }

//   console.log("edit index:", editIndex)
//   console.log("edit value:", editvalue)
//   console.log("list:", list)
//   console.log("____________________")

//   return (
//     <>
//       <h1>Todo list</h1>
//       <TaskAdd text={text} setText={setText} addTask={addTask} />

//       <ul>
//         {list.map((item, index) => {
//           if (index == editIndex) {
//             return <TaskInput key={index} item={item} setEditvalue={setEditvalue} confirmEdit={confirmEdit} />
//           } else {
//             return <TaskItem key={index} item={item} index={index} removeTask={removeTask} editTask={editTask} />
//           }
//         })}
//       </ul>
//     </>
//   )
// }

// export default App

// import { Card } from "react-bootstrap"
import Navbar1 from "./components/Navbar"
import Card1 from "./components/Card"
import Carouel1 from "./components/Carousel"
import "./App.css"

function App() {
  return (
    <>
      ,
      <Navbar1 />,
      <Card1 />,
      <Carouel1 />
    </>
  )
}

export default App
