window.onload = function() {
    let inputName = document.getElementById('input-name');
    inputName.onkeydown = function (event) {
        if (event.key >= '0' && event.key <= '9') {
            event.preventDefault();
        }
    }


    let inputUserName = document.getElementById('input-user_name');
    inputUserName.onkeydown = function (event) {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    }


    let checkBox = document.getElementById('check-box');
    checkBox.onchange = function (event){
        if (checkBox.checked) {
            return console.log("Согласен")
        }else {
            console.log("Не согласен");
        }

    }

    let button = document.getElementById('btn');
    let inputMail = document.getElementById('input-mail');
    let password = document.getElementById('input-password');
    let passwordSecond = document.getElementById('input-password2');
    let popUp = document.getElementById('popup');



    function signUpClick(event) {
        event.preventDefault()
        if (inputName.value === '') {
            return alert("Заполните поле Full Name")
        }
        if (inputUserName.value ==='') {
            return alert("Заполните поле User Name")
        }
        if (inputMail.value === '') {
            return alert("Заполните поле Your Mail")
        }
        if (password.value === '') {
            return alert("Заполните поле Password")
        }
        if (passwordSecond.value === '') {
            return alert("Заполните поле Password")
        }
        if (password.value !== passwordSecond.value){
            return alert("Пароли не совпадают")
        }
        let passwordLength = password.value.length
        if (passwordLength < 8) {
            return alert("пароль слишком короткий пароль должен состоять минимум из 8 символов ")
        }

        if (!checkBox.checked) {
            return alert("чекбокс не выбран")
        }

        return popUp.style.display = 'block'
    }

    button.addEventListener("click", signUpClick)

    function singInClick(event) {
        event.preventDefault()
        if (inputUserName.value === '' || password.value === '') {
            return alert("пожалуйста заполните оба поля")
        }
        alert("Добро пожаловать " + inputUserName.value)
        window.location.reload();
    }

    function signInFrom () {
        popUp.style.display = 'none'
        document.querySelector('h2').innerText = 'Log in to the system'
        inputName.remove()
        inputMail.remove()
        passwordSecond.remove()
        checkBox.remove()
        document.getElementsByClassName('check-box-text')[0].remove()
        document.getElementsByClassName('form__link')[0].remove()
        document.getElementById('full-name').remove()
        document.getElementById('mail').remove()
        document.getElementById('confirm-password').remove()
        inputUserName.value = '';
        password.value = '';
        button.innerText = "Sign In";
        button.removeEventListener("click", signUpClick)
        button.addEventListener("click", singInClick)
    }

    let popUpButton = document.getElementById('popup-btn');
    popUpButton.onclick = function (){
        signInFrom()
    }
    let otherAccLink = document.getElementsByClassName('form-link')[0];
    otherAccLink.onclick = function () {
        signInFrom()
    }

    console.log("hello!")
    console.log("hello 2!")
    console.log("hello from dev2")

}


