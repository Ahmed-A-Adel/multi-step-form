export default function Validatoer(data) {
  // if (Object.values(data).every((value) => value === "")) {
  //   return false;
  // }
  if (Object.values(data).some((value) => value === "")) {
    return false;
  } else {
    return true;
  }
}
