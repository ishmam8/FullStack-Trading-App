import * as actions from './actionTypes';

export function counterT1(state = 0, action) {
    // console.log("counterT1 called in", state)
    switch(action.type) {
        case "UPDATEDT1":
            console.log("counterT1 called", state)
            return {
                ...state, amount: action.payload
            };
        default:
            //console.log("REDUCER default",state)
            return state
    }
};

// export function counterT2(state=0, action) {
//     switch(action.type) {
        
//         case "UPDATEDT2":
//             console.log("counterT2 called",state)
//             return state + 1
//         default:
//             return state
//     }
// }
