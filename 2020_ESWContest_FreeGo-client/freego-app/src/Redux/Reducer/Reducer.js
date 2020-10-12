import { DATASEND, NAMESEND } from "../Actions/NameDay";

const initState = {
    PName : "",
    Dday : "",
    selName: "" // 현재 선택된 목록 아이템 이름
}

const Reducer = (state = initState, action) => {
    switch(action.type) {
        case DATASEND:
            const {
                pName, dDay
            } = action;
            
            return Object.assign({}, state, {
                PName: pName,
                Dday : dDay
            })
        case NAMESEND: 
            return Object.assign({}, state, {
                selName: action.selName
            })
        default: return state;
    }
}
export { initState, Reducer };