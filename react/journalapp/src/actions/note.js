import { db } from "../firebase/firebase-config";

export const startNewNode = () => {
	return async(dispatch, getstate) => {
		const {uid} = getstate().auth;


        const newNode={
            title:'',
            body:'',
            date:new Date().getTime()
        }
       const docRef =await db.collection(`${uid}/journal/notes`).add(newNode);
       console.log(docRef);
	};
};
