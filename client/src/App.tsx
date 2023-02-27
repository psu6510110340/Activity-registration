import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import Index from './page/index'
import Login from './page/login'
import Main from './page/main'
import Logout from './page/Logout'
import Register from './page/Register'
import Announcement from './page/Announcement'
import UseData from './page/UserDataDisplay'
import Profile from './page/Profile'
import Status from './page/status'
import ActivityForm from './page/Pageadmin/ActivityForm'
import Detailpage from './page/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Announcement/>} />
        <Route path="/Home" element={<Home />}/>
          <Route path="/Detail/:id" element={<Detailpage />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={ <Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/UserDataDisplay" element={<UseData />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/admin' element ={<ActivityForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
