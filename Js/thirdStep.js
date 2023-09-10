let userInfo = JSON.parse(localStorage.getItem('userInfo'));
let containerAddon1 = document.getElementById('container-addon1');
let containerAddon2 = document.getElementById('container-addon2');
let containerAddon3 = document.getElementById('container-addon3');
const nextStepBtn = document.getElementById('nextStepBtn');
const monthlyAddonPrices = [1,2,2];
const yearlyAddonPrices = [10,20,20];
userInfo.onlineAddon = '';

if(userInfo.plan == 'Monthly'){
    containerAddon1.innerHTML += `<p class="add-onPrice">+$${monthlyAddonPrices[0]}/mo</p>`;
    containerAddon2.innerHTML += `<p class="add-onPrice">+$${monthlyAddonPrices[1]}/mo</p>`;
    containerAddon3.innerHTML += `<p class="add-onPrice">+$${monthlyAddonPrices[2]}/mo</p>`;    
} else {
    containerAddon1.innerHTML += `<p class="add-onPrice">+$${yearlyAddonPrices[0]}/yr</p>`;
    containerAddon2.innerHTML += `<p class="add-onPrice">+$${yearlyAddonPrices[1]}/yr</p>`;
    containerAddon3.innerHTML += `<p class="add-onPrice">+$${yearlyAddonPrices[2]}/yr</p>`;
}

document.addEventListener('DOMContentLoaded', () => {   
    let checkboxAddon1 = document.querySelector('#checkAddon1');
    let checkboxAddon2 = document.querySelector('#checkAddon2');
    let checkboxAddon3 = document.querySelector('#checkAddon3'); 
    userInfo.onlineAddon = false;
    userInfo.largerStorage = false;
    userInfo.customProfile = false;
    userInfo.addonName = [];
    
    checkboxAddon1.addEventListener('click', () => {
        if (checkboxAddon1.checked) {
          console.log('CheckboxAddon1 ha sido clickeado');
          console.log('checkbox marcado');
          userInfo.onlineAddon = true;
          userInfo.addonName.push('Online service');
          containerAddon1.classList.add('focus');
        } else {
          console.log('CheckboxAddon1 ha sido clickeado');
          console.log('checkbox desmarcado');
          containerAddon1.classList.remove('focus');
          userInfo.onlineAddon = false;
          const index = userInfo.addonName.indexOf('Online service');
          if (index !== -1) {
            userInfo.addonName.splice(index, 1);
          }
        }
        console.log(userInfo.onlineAddon);
      });

      checkboxAddon2.addEventListener('click', () => {
        if (checkboxAddon2.checked) {
          console.log('CheckboxAddon2 ha sido clickeado');
          console.log('checkbox marcado');
          userInfo.largerStorage = true;
          userInfo.addonName.push('Larger storage');
          containerAddon2.classList.add('focus');
        } else {
          console.log('CheckboxAddon2 ha sido clickeado');
          console.log('checkbox desmarcado');
          containerAddon2.classList.remove('focus');
          userInfo.largerStorage = false;
          const index = userInfo.addonName.indexOf('Larger storage');
          if (index !== -1) {
            userInfo.addonName.splice(index, 1);
          }
        }
        console.log(userInfo.largerStorage);
      });

      checkboxAddon3.addEventListener('click', () => {
        if (checkboxAddon3.checked) {
          console.log('CheckboxAddon3 ha sido clickeado');
          console.log('checkbox marcado');
          userInfo.customProfile = true;
          userInfo.addonName.push('Customizable Profile');
          containerAddon3.classList.add('focus');
        } else {
          console.log('CheckboxAddon3 ha sido clickeado');
          console.log('checkbox desmarcado');
          containerAddon3.classList.remove('focus');
          userInfo.customProfile = false;
          const index = userInfo.addonName.indexOf('Customizable Profile');
          if (index !== -1) {
            userInfo.addonName.splice(index, 1);
          }
        }
        console.log(userInfo.customProfile);
      });

});

nextStepBtn.addEventListener('click', () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location.href = './summary.html';
})