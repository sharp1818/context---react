import { GET_USERS, GET_PROFILE } from "../types";

const UserReducer = (state, action)  => {
    const {payload,type} = action;
    
    switch(type){
        case GET_USERS:
            return{
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return{
                ...state,
                selectedUser: payload
            }
        default:
            return state;
    }
}

export default UserReducer