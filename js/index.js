function ValidPhone() {
    const re = /^\d[\d\(\)\ -]{4,14}\d$/;
    const phone = document.getElementById('phone').value;
    const valid = re.test(phone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    
    return false;
}  
function ValidName() {
    const re =/^[A-Za-z]+$/;
    const name = document.getElementById('name').value;
    const valid = re.test(name);
    if (valid) output = 'Имя введено правильно!';
    else output = 'Имя введено неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}