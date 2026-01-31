// This file does not define behavior.
// It defines permission.

export const allowEmergence = (state) => {
  return {
    ...state,
    emergenceAllowed: true,
    explanationRequired: false,
    responseGuaranteed: false,
  };
};
