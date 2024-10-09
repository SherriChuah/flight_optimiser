export const checkValidateTab = (value) => {
    if (value === "") {
      return false;
    }
    return true;
};

export const errorMessages = () => {
    alert("Please fill in the fields");
    // return <span style={{ color: "red", fontSize: "14px" }}>This field is required</span>;
};

export const filledMinimumTwo = (peopleDetails) => {
  if (peopleDetails.length < 2) {
    // alert("Need a minimum of 2 people details");
    return false;
  }
  return true;
};

export const filledMinimumTwoErrorMessage = (peopleDetails) => {
    alert("Need a minimum of 2 people details");
};