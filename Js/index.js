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
        window.location.href = '../html/secondStep.html';
    } else {
        alert('Debe rellenar los campos faltantes')
    }
})