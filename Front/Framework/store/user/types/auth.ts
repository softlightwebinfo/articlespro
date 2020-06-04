import {IAuth, IAuthRegister} from "../../../Interfaces/IAuth";
import {IUser} from "../../../Interfaces/IUser";

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_REGISTER = 'AUTH_REGISTER';


export interface IAuthLoginReducer {
    type: typeof AUTH_LOGIN;
    data: IAuth;
}

export interface IAuthRegisterReducer {
    type: typeof AUTH_REGISTER;
    data: IAuthRegister;
}

export type TAuthReducer = IAuthLoginReducer | IAuthRegisterReducer;

export interface IAuthStateReducer {
    isLogin: boolean;
    token: string;
    user: IUser;
}
