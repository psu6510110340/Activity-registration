import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './page/Pagehome/Home'
import Login from './page/Pagelogin/login'
import Logout from './page/Pagelogin/Logout'
import Register from './page/Pagelogin/Register'
import Announcement from './page/Pagelandding/Announcement'
import UseData from './components/Body/UserDataDisplay'
import Status from './page/PageUser/status'
import ActivityForm from './page/Pageadmin/ActivityForm'
import Detailpage from './page/Pagehome/Detail'
import Page from './page/Pageadmin/Checkadmin'
import Adminhome from './page/Pageadmin/adminhome'
import Fixdisplay from './components/Body/fixdisplay'
import Admincheck from './page/Pageadmin/Admincheck'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Announcement/>} />
        <Route path="/Home" element={<Home />}/>
        <Route path="/Detail/:id" element={<Detailpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/UserDataDisplay" element={<UseData />} />
        <Route path="/Status" element={<Status />} />
        <Route path='/adminForm' element ={<ActivityForm/>}/>
        <Route path='/checkadmin' element ={<Page/>}/>
        <Route path='/admin' element = {<Adminhome/>}/>
        <Route path='/fixdisplay' element = {<Fixdisplay/>}/>
        <Route path='/admincheck/:id' element = {<Admincheck/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
