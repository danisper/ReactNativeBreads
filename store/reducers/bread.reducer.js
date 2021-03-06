import { FILTERED_BREAD, SELECT_BREAD } from "../actions/bread.action";

import { BREADS } from "../../data/breads";

const INITIAL_STATE = {
    list: BREADS,
    filteredBreads: [],
    selected: null,
}

const BreadReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SELECT_BREAD:
            return {
                ...state,
                selected: state.list.find(bread => bread.id === action.breadID)
            }
        case FILTERED_BREAD:
            return {
                ...state,
                filteredBreads: state.list.filter(bread => bread.category === action.categoryID)
            }
        default:
            return {...state}
    }
}
export default BreadReducer;