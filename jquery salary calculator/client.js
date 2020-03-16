console.log("Hello!");

const information = [];

$(document).ready(init);

function init() {
  $(".js-employee-stats").on("submit", submitEmployeeInfo);
}

function submitEmployeeInfo(event) {
  event.preventDefault();
  console.log("Hellooooo");

  const employeeInfo = {
    firstName: $(`.js-employee-FN`).val(),
    lastName: $(`.js-employee-LN`).val(),
    ID: $(`.js-employee-ID`).val(),
    jobTitle: $(`.js-employee-title`).val(),
    annSalary: $(`.js-employee-salary`).val()
  };

  information.push(employeeInfo);
  console.log(information);
}
