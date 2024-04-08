const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("current State", currentState);
  console.log("Action Dispatched", currentState);
  next(action);
  console.log("Update State", store.getState());
};

export default logger;
