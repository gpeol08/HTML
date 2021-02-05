import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user,setUser} = useContext(UserContext)

    const handle =()=>{
        setUser({});
    }
    return (
        <div>
             <div>
            <h1>about Screen</h1>
            <hr />

            <pre >
                {
                    JSON.stringify(user,null,3)
                }
            </pre>
            <button className='btn btn-warning'
            onClick={handle}>LogOut</button>
        </div>
        </div>
    )
}
