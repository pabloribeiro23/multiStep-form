let userInfo = JSON.parse(localStorage.getItem('userInfo'));
let addonNames = userInfo.addonName;
const planDetails = document.getElementById('plan-details');
const planPrice = document.getElementById('plan-price');
const addonsContainer = document.getElementById('addons-container');
const summaryTotal = document.getElementById('summary-total');
const confirmBtn = document.getElementById('nextStepBtn');
let total = userInfo.price;

planDetails.innerHTML += `<p class="summary-planName">${userInfo.planName} (${userInfo.plan})</p>`

if(userInfo.plan == 'Monthly'){
    planPrice.innerHTML = `<p class="summary-planPrice">$${userInfo.price}/mo</p>`
    addonNames.forEach(element => {
        if(element == 'Online service'){
            addonsContainer.innerHTML += `<div class="addonContainer"><p class="summary-addonName">${element}</p><p class="summary-addonPrice">$${1}/mo</p></div>`
            total += 1;
        } else {
            addonsContainer.innerHTML += `<div class="addonContainer"><p class="summary-addonName">${element}</p><p class="summary-addonPrice">$${2}/mo</p></div>`
            total += 2;
        }
    });
    summaryTotal.innerHTML += `<p class="summary-totalTitle">Total (per month)</p>
    <p class="summary-totalPrice">+$${total}/mo</p>`
} else {
    planPrice.innerHTML = `<p class="summary-planPrice">$${userInfo.price}/yr</p>`
    addonNames.forEach(element => {
        if(element == 'Online service'){
            addonsContainer.innerHTML += `<div class="addonContainer"><p class="summary-addonName">${element}</p><p class="summary-addonPrice">$${10}/yr</p></div>`
            total += 10;
        } else {
            addonsContainer.innerHTML += `<div class="addonContainer"><p class="summary-addonName">${element}</p><p class="summary-addonPrice">$${20}/yr</p></div>`
            total += 20;
        }
    });
    summaryTotal.innerHTML += `<p class="summary-totalTitle">Total (per year)</p>
    <p class="summary-totalPrice">+$${total}/yr</p>`
}

confirmBtn.addEventListener("click", () => {
    Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: `Thanks for confirming your subscription!
        We hope you have fun using our
        platform. If you ever need support,
        please feel free to email us at
        support@loremgaming.com.
        `,
        timer: 10000,
        confirmButtonText: "Accept",
      }).then(() => {
        location.href = "index.html"
      })
})