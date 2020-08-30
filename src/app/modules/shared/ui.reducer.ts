import { UIActions, START_LOADING, STOP_LOADING } from './ui.actions';

export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false,
};

export function uiReducer(state = initialState, action: UIActions) {
    switch (action.type) {
        case START_LOADING:
            return {
                isAuthenticated: true,
            };
        case STOP_LOADING:
            return {
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
