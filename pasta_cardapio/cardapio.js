const checkboxBorda = document.getElementById('bordaCheckbox')
const selectBorda = document.getElementById('bordaSelect')

checkboxBorda.addEventListener('change', ()=>{
    selectBorda.disabled = !checkboxBorda.checked;
});