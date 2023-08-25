// employeeReducer.js
const initialState = JSON.parse(localStorage.getItem("employees")) || [];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      const newEmployeesAdd = [...state, action.payload];
      localStorage.setItem("employees", JSON.stringify(newEmployeesAdd));
      return newEmployeesAdd;

    case "EDIT_EMPLOYEE":
      const newEmployeesEdit = state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
      localStorage.setItem("employees", JSON.stringify(newEmployeesEdit));
      return newEmployeesEdit;

    case "DELETE_EMPLOYEE":
      const newEmployeesDelete = state.filter(
        (employee) => employee.id !== action.payload
      );
      localStorage.setItem("employees", JSON.stringify(newEmployeesDelete));
      return newEmployeesDelete;

    default:
      return state;
  }
};

export default employeeReducer;
