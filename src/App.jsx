
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Jobs from './components/Jobs'
import  {Routes,Route} from "react-router-dom"

const App = () =>{
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/jobs" element={<Jobs/>}/>

    </Routes>
    )

} 

export default App
