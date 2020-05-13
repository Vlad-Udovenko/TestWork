function ValidatePhone() {

    const re = /^\d[\d\(\)\ -]{4,14}\d$/;
    const phone = document.getElementById('phone').value;
    const isvalid = re.test(phone);

    isvalid ? output = 'Номер телефона введен правильно!' : output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;

    return isvalid;

}

function ValidateName() {

    const re = /^[A-Za-z]+$/;
    const name = document.getElementById('name').value;
    const isvalid = re.test(name);

    isvalid ? output = 'Имя введено правильно!': output = 'Имя введено неправильно!';
    document.getElementById('message').innerHTML = output;

    return isvalid;
    
}