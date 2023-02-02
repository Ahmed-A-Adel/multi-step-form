import Validatoer from "./helpers/Validatoer";
function Reducer(state, action) {
  switch (action.type) {
    case "NEXT": {
      action.event.preventDefault();
      const currentStep =
        state.step === "/" ? "/step-2" : `/step-${+state.step.slice(-1) + 1}`;
      const vaildData = Validatoer(action.state.userInfo);
      return vaildData
        ? { ...state, errorMessage: vaildData }
        : { ...action.state, step: currentStep, errorMessage: vaildData };
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
