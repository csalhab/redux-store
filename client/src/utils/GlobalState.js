//Redux
// import React, { createContext, useContext } from "react";
// import { useProductReducer } from "./reducers";
import { createStore } from "redux";
import { reducer } from "./reducers";
//Redux
// const StoreContext = createContext();
// const { Provider } = StoreContext;

//Redux
// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] =
//     useProductReducer();
//Redux
//port this initial state to reducers.js
//   {
//   products: [],
//   cart: [],
//   cartOpen: false,
//   categories: [],
//   currentCategory: '',
// }

//   return <Provider value={[state, dispatch]} {...props} />;
// };

//Redux
// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default createStore(reducer);
