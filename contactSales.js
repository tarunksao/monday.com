document.querySelector("#form").addEventListener("submit", dataCollect);
let contactArr = [];

function dataCollect()
{
    event.preventDefault();
    let contactObj = {
        firstName : form.firstName.value,
        lastName : form.lastName.value,
        workEmail : form.emailForm.value,
        jobTitle : form.jobTitle.value,
        phone : form.phone.value,
        companyName : form.companyName.value,
        companySize : form.companySize.value,
        help : form.help.value
    };
    contactArr.push(contactObj);
    //console.log(contactArr);
    localStorage.setItem("contactSales", JSON.stringify(contactArr));
}