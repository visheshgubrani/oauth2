import { useState } from "react"

export const RegisterUser = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form action="" method="post">
                <input type="email" name="" id="" placeholder="email"/>
                <input type="text" placeholder="username"/>
                <input type="password" name="" id="" placeholder="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}