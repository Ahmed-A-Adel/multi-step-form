function Reducer(state, action) {
  switch (action.type) {
    case "NEXT": {
      console.log("next step");
      action.event.preventDefault();

      const currentStep =
        state.step === "/" ? "/step-2" : `/step-${+state.step.slice(-1) + 1}`;

      return { ...state, step: currentStep };
    }
    case "BACK": {
      action.event.preventDefault();

      const currentStep =
        state.step === "/step-2" ? "/" : `/step-${+state.step.slice(-1) - 1}`;

      return { ...state, step: currentStep };
    }
  }
}
export default Reducer;
