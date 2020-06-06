import {IAuthRegister} from "../../Interfaces/IAuth";

export const actionTypes = {
    AUTH_USER: 'AUTH_USER',
    AUTH_USER_FAIL: 'AUTH_USER_FAIL',
    AUTH_REGISTER: 'AUTH_REGISTER',
    AUTH_REGISTER_SUCCESS: "AUTH_REGISTER_SUCCESS",
    AUTH_REGISTER_FAILURE: "AUTH_REGISTER_FAILURE"
};

export const ActionUserRegister = (data: IAuthRegister) => ({type: actionTypes.AUTH_REGISTER, data});

export const Success = (data: any) => ({type: actionTypes.AUTH_REGISTER_SUCCESS, data});
export const Failure = (data: any) => ({type: actionTypes.AUTH_REGISTER_FAILURE, data});
