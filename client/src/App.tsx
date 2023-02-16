import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import Home from './page/Home'
import Index from './page/index'
import Login from './page/login'
import Main from './page/main'
import Logout from './page/Logout'
import Register from './page/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={ <Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
