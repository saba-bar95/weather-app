export default function checkSearchValidity(input) {
  if ((input.value && !input.checkValidity()) || !input.value) {
    alert("Enter more than one letter");
    return false;
  } else return true;
}
