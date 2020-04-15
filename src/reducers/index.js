import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions.js';

const initialState = {
    features: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE: {
            return {
                ...state,
                features: state.features.map((feature, index) => {
                    if (index === action.payload) {
                        return {
                        ...feature
                        };
                    } else {
                        return { ...feature }
                    }
                })
            };
        }

        case REMOVE_FEATURE: {
            return {
                ...state,
                features: []
            };
        }

        default:
            return state;
    }
}

export default reducer;