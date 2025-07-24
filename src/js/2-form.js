let formData = {
    email: '',
    message: '',
}

const inputElem = document.querySelector('.feedback-form');

inputElem.addEventListener('input', e => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    
    formData.email = email.trim();
    formData.message = message.trim();
   
    saveToLs('feedback-form-state', formData)
})

document.addEventListener('DOMContentLoaded',()=> {
    const dataLs = getFromLs('feedback-form-state')
    formData = dataLs || { email: '', message: '' };


    
    try {
         inputElem.elements.email.value = dataLs.email;
         inputElem.elements.message.value = dataLs.message;
    } catch (error) {
        console.log('error');
    }
   
})

function saveToLs(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData)
}

function getFromLs(key, defaulValue) {
    const jsonData = localStorage.getItem(key);
    try {
        const data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        return defaulValue || jsonData    }
}

inputElem.addEventListener('submit', e => {
    e.preventDefault();
    if (inputElem.elements.email.value === '' || inputElem.elements.message.value === '') {
        alert('«Fill please all fields»');
        return
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData = { email: '', message: '' };
        inputElem.reset();

    }
})