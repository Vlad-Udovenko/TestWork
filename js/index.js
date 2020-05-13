function ValidPhone() {
    let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    let phone = document.getElementById('phone').value;
    let valid = re.test(phone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  
function ValidName() {
    let re =/^[A-Za-z]+$/;
    let name = document.getElementById('name').value;
    let valid = re.test(name);
    if (valid) output = 'Имя введено правильно!';
    else output = 'Имя введено неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}