import {AUTH_LOGIN, AUTH_REGISTER, IAuthStateReducer, TAuthReducer} from "../types/auth";

const initialState: IAuthStateReducer = {
    isLogin: false,
    token: null,
    user: null,
};

export default function reducer(state = initialState, action: TAuthReducer) {
    switch (action.type) {
        case AUTH_REGISTER: {
            return {
                ...state,
            };
        }
        case AUTH_LOGIN: {
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}
