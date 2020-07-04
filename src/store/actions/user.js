export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_OUT = "USER_SIGN_OUT";

export const userSignIn = (user) => {
  return {
    type: USER_SIGN_IN,
    payload: {
      user,
    },
  };
};

export const userSignOut = () => {
  return {
    type: USER_SIGN_OUT,
  };
};
