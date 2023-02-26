const reducers = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_DATA":
            const userData = { ...state.userData, ...action.payload };
            localStorage.setItem("userData", JSON.stringify(userData));
            return {
                ...state,
                userData: userData,
            };
        default:
            return state;
    }
};

export default reducers;
