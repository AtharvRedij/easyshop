const logger = (store) => (next) => (action) => {
  console.group(action.type);
  if (action.payload) {
    console.log("Payload is ", action.payload);
  }
  const result = next(action);
  console.log("New state ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;
