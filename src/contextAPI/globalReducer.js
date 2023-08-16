import * as ActionType from "./types";

export const EnquiryProduct = (state, action) => {
    const { type, items } = action;
    // console.log({type, items});
    switch (type) {
        case ActionType.ENQUIRY_PRODUCTS:
            return {
                ...state,
                enquiryProductList: items,
            }
        case ActionType.SEARCH_PRODUCTS:
            return {
                ...state,
                searchProductsList: items,
            }
        case ActionType.SET_CATGORY_ID:
            return {
                ...state,
                catId: items,
            }
        default:
            return state;
    }
}