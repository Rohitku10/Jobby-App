
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import  {Routes,Route} from "react-router-dom"

const App = () =>{
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>

    </Routes>
    )

} 

export default App
