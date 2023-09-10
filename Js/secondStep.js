const monthlySwitch = document.getElementById('monthlyswitch');
const buttonArcade = document.getElementById('buttonArcade');
const buttonAdvanced = document.getElementById('buttonAdvanced');
const buttonPro = document.getElementById('buttonPro');
const nextStepBtn = document.getElementById('nextStepBtn');
const arcadePrice = document.getElementById('arcadePrice');
const advancedPrice = document.getElementById('advancedPrice');
const proPrice = document.getElementById('proPrice');
const btnValue = document.getElementById('btnValue');
let userInfo = JSON.parse(localStorage.getItem('userInfo'));
const monthlyPrices = [9, 12, 15];
const yearlyPrices = [90, 120, 150];
userInfo.plan = 'Monthly'

function setPrice(price) {
    userInfo.price = price;
    console.log(userInfo);
}

monthlySwitch.addEventListener('click', () => {
    if (btnValue.innerHTML === '0') {
        btnValue.innerHTML = '1';
        userInfo.plan = 'Yearly'
        arcadePrice.innerHTML = yearlyPrices[0] + '/yr';
        advancedPrice.innerHTML = yearlyPrices[1] + '/yr';
        proPrice.innerHTML = yearlyPrices[2] + '/yr';
        monthlySwitch.classList.add('change');
    } else {
        btnValue.innerHTML = '0';
        arcadePrice.innerHTML = monthlyPrices[0] + '/mo';
        advancedPrice.innerHTML = monthlyPrices[1] + '/mo';
        proPrice.innerHTML = monthlyPrices[2] + '/mo';
        userInfo.plan = 'Monthly'
        monthlySwitch.classList.remove('change');
    }
});

buttonArcade.addEventListener('click', () => {
    userInfo.price = "";
    if (btnValue.innerHTML === '0'){
        setPrice(monthlyPrices[0]);
        userInfo.planName = 'Arcade';
    } else {
        setPrice(yearlyPrices[0]);
        userInfo.planName = 'Arcade';
    }
    console.log (userInfo);
    buttonArcade.focus();
})

buttonAdvanced.addEventListener('click', () => {
    userInfo.price = "";
    if (btnValue.innerHTML === '0'){
        setPrice(monthlyPrices[1]);
        userInfo.planName = 'Advanced';
    } else {
        setPrice(yearlyPrices[1]);
        userInfo.planName = 'Advanced';
    }
    console.log (userInfo);
    buttonAdvanced.focus();
})

buttonPro.addEventListener('click', () => {
    userInfo.price = "";
    if (btnValue.innerHTML === '0'){
        setPrice(monthlyPrices[2]);
        userInfo.planName = 'Pro';
    } else {
        setPrice(yearlyPrices[2]);
        userInfo.planName = 'Pro';
    }
    console.log (userInfo);
    buttonPro.focus();
})

nextStepBtn.addEventListener('click', () => {
    if(userInfo.planName !== undefined && userInfo.planName.trim() !== ""){
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = './thirdStep.html';
    } else {
        Swal.fire({
            icon: "error",
            title: "",
            text: "You must select a plan to continue.",
            timer: 3000,
            confirmButtonText: "Accept",
    })
    }
})