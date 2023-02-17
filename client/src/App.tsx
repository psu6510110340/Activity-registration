import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import Index from './page/index'
import Login from './page/login'
import Main from './page/main'
import Logout from './page/Logout'
import Register from './page/Register'
import Announcement from './page/Announcement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Announcement/>} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={ <Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
