const nextStepBtn = document.getElementById('nextStepBtn');

nextStepBtn.addEventListener('click', () => {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (username !=="" && email !=="" && phone!==""){
        const userInfo = {
            username: username,
            emailAddress: email,
            phoneNumber: phone
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = './secondStep.html';
    } else {
        Swal.fire({
            icon: "error",
            title: "",
            text: "You must fill out all the fields to continue.",
            timer: 3000,
            confirmButtonText: "Accept",
    })
}})
