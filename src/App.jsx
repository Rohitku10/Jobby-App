
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import  {Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'

const App = () =>{
    return(
    <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/jobs" element={<ProtectedRoute><Jobs/></ProtectedRoute>}/>
        <Route path="/jobs/:id" element={<ProtectedRoute><JobItemDetails/></ProtectedRoute>}/>
    </Routes>
    )

} 

export default App
