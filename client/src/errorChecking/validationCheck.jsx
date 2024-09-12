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