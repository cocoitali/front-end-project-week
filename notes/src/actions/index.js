export const ADD_NOTE = 'ADD_NOTE'

export const addNote = title => {
    console.log(title)
    return {
        type: ADD_NOTE,
        payload: title
    }
}
