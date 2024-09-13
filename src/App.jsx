import { useSelector } from "react-redux"
import  Routes  from "./Routes/index"



function App() {
  console.log(useSelector(state => state.loaderState.loader))
  return (
  <Routes />
  )
}

export default App