/**
 * @Authour: Mohamed Lemine NIANG
 * @Objective: Quick review of Redux core function
 * 
 * 
 * 
 */


/**
 * To create a store we need to pass a reducer function
 * 
 * const store = Redux.createStore(reducer)
 * that gives us an object with 3 main methods:
 * 
 * 1- getState() : to get the current state of the store
 * 2- dispatch(action) : to send an action to the store to update the state by the reducer function
 * 3- subscribe(listener) : to listen to any change in the state and execute a callback function (The observer pattern)
 * 
 * 
 */