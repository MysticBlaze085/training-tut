export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                isAuthenticated: true,
            };
        case 'STOP_LOADING':
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
}
