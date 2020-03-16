console.log("Hello!");

const information = [];

$(document).ready(init);

function init() {
  $(".js-employee-stats").on("submit", submitEmployeeInfo);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployeeInfo);
}

function deleteEmployeeInfo() {
  console.log(this);
  $(this)
    .parent()
    .parent()
    .remove();
  const infoIndex = $(this).data("index");

  information.splice(infoIndex, 1);
}

function submitEmployeeInfo(event) {
  event.preventDefault();
  console.log("Hellooooo");

  const employeeInfo = {
    firstName: $(`.js-employee-FN`).val(),
    lastName: $(`.js-employee-LN`).val(),
    ID: $(`.js-employee-ID`).val(),
    jobTitle: $(`.js-employee-title`).val(),
    annSalary: parseFloat($(`.js-employee-salary`).val())
  };

  information.push(employeeInfo);
  console.log(information);
  render();
}

function render() {
  $(".js-table-body").empty();
  let totalSalary = 0;
  for (let i = 0; i < information.length; i++) {
    const employeeinformation = information[i];
    totalSalary = totalSalary + employeeinformation.annSalary;

    $(".js-table-body").append(`
        <tr>
        <td>${employeeinformation.firstName}</td>
        <td>${employeeinformation.lastName}</td>
        <td>${employeeinformation.ID}</td>
        <td>${employeeinformation.jobTitle}</td>
        <td>$${employeeinformation.annSalary}</td>
        <td><button class="js-btn-delete" data-index='${i}'>Delete</button></td>
        </tr>
        `);
  }

  $(".js-total-salary").text(totalSalary);
}
