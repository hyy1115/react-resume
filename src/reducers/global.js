/**
 * Created by yongyuehuang on 2017/6/7.
 */
const initState = {
    routeKey: 1
}

export const global = (state = initState, action) => {
    switch (action.type) {
        case "SET_ROUTE_KEY":
            return {
                ...state,
                routeKey: action.routeKey
            }
        default:
            return state
    }
}