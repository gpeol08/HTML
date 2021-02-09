import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.loggin:
            return {
                uid: action.payload.uid,
                name: action.payload.name
            }
        case types.logout:
            return {};
        default:
            return state;
    }
}