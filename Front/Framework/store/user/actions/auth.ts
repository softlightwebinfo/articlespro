import {AUTH_LOGIN, AUTH_REGISTER, TAuthReducer} from "../types/auth";
import {IAuth, IAuthRegister} from "../../../Interfaces/IAuth";

export const loginAction = (data: IAuth): TAuthReducer => ({
    type: AUTH_LOGIN,
    data
});

export const registerAction = (data: IAuthRegister): TAuthReducer => ({
    type: AUTH_REGISTER,
    data
});
