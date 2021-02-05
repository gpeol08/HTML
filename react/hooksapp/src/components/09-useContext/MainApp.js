import React,{useState} from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';
export const MainApp = () => {

    const [user, setUser] = useState({});

    // const user={
    //     id:123,
    //     name:'Guadalupe',
    //     email:'GuadalupeOlivas@humaya.com.mx'
    // };
	return (
		<UserContext.Provider value={{user,setUser}}>
			<AppRouter />
		</UserContext.Provider>
	);
};
