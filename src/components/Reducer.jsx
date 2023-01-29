function Reducer(state, action) {
  switch (action.type) {
    case "NEXT": {
      action.event.preventDefault();

      const currentStep =
        state.step === "/" ? "/step-2" : `/step-${+state.step.slice(-1) + 1}`;
      return { ...action.state, step: currentStep };
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
  }
}
export default Reducer;
