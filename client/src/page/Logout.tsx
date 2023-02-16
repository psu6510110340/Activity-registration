import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('user')
        navigate('/')
    })
    return (
        <div>
            <h1>Loading</h1>
        </div>
    )
}

export default Logout