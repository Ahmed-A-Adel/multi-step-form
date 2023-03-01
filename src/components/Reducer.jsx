import Validatoer from "./helpers/Validatoer";
function Reducer(state, action) {
  switch (action.type) {
    case "NEXT": {
      action.event.preventDefault();
      // checking if the current step is on "/" to replace it's position to "/step-1" else if the current step is somthing like step-1 or step-2 et. just incres the step number i.e. current step = "step-2" +1 = "step-3"
      const currentStep =
        state.step === "/" ? "/step-2" : `/step-${+state.step.slice(-1) + 1}`;
      // 1- if the current step equales to "/step-5" just return false else if the action.for/the current step data's name is "addones" then return false else return Validatoer with the data that been send by action.state
      const validData =
        currentStep === "/step-5"
          ? false
          : action.for === "addOnes"
          ? false
          : Validatoer(action.state[action.for]);
      // if validData is true meaning there is an invalid data return the current state with validData assigned to errorMessage, Eles return the data that is send by action.state with the currentStep and ofcourse the valid data
      return validData
        ? { ...state, errorMessage: validData }
        : {
            ...state,
            ...action.state,
            step: currentStep,
            errorMessage: validData,
          };
    }
    case "BACK": {
      action.event.preventDefault();

      const currentStep =
        state.step === "/step-2" ? "/" : `/step-${+state.step.slice(-1) - 1}`;

      return { ...state, step: currentStep };
    }
    case "TO-PLANE": {
      action.event.preventDefault();

      return { ...state, step: "/step-2" };
    }
    case "SET-NEXT-STEP": {
      return { ...action.state };
    }
  }
}
export default Reducer;
