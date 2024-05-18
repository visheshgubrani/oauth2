import { set } from "mongoose"
import { useState } from "react"

export const LoginUser = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = (e) => {
        return e.target.value
    }
    return (
        <div>
            <form action="" method="post">
                <input type="text" placeholder="Enter username or email" onChange={(e) => setUser(e.target.value)} />
                <input type="password" name="" id="" placeholder="password" />
            </form>
        </div>
    )
}