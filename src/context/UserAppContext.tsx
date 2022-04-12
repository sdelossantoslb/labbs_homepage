import React, { createContext, useEffect, useState } from 'react'
import { UserInfo } from '../models';

interface ContextProps{
    children:JSX.Element,
}

const Context = createContext<UserInfo>({});

const UserAppContext= ({children}: ContextProps)=>{
    const [user, setUser] = useState<UserInfo>({})
    
    useEffect(()=>{
        setUser({userName:'demo'})
    },[])

    return (<Context.Provider value={user}>
            {children}
         </Context.Provider>)
}

export default UserAppContext;