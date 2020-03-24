import { ADD_NOTE } from '../actions'

const initialState = {
    title: '',
    textBody: '',
    notes:''


}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
            default:
                return state
    }
}