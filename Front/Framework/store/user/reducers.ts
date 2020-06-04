export const exampleInitialState = {
    token: "",
    isLogin: false,
    user: null,
};

function reducers(state = exampleInitialState, action) {
    switch (action.type) {
        case '__NEXT_REDUX_WRAPPER_HYDRATE__': {
            return {...state, ...action.payload}
        }

        default:
            return state
    }
}

export default reducers
