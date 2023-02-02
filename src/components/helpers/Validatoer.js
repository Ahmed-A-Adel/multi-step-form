export default function Validatoer(data) {
  const dataArray = Object.entries(data);
  if (dataArray.every((value) => value[1] === "")) {
    // console.log(Object.keys(data));
    return Object.keys(data);
  } else if (dataArray.some((value) => value[1] === "")) {
    const emptyInputs = dataArray
      .filter((input) => input[1] === "")
      .map((input) => input[0]);
    // console.log(emptyInputs);
    return emptyInputs;
  } else {
    return false;
  }
}
