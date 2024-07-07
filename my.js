const secretNumber = Math.floor(Math.random()*10)+1;

function checkGuess(){
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if(userGuess === secretNumber)
    {
        document.getElementById('message').textContent = 'Поздравляю! Вы угадали загаданное число!';
    }

    else if(userGuess < 1 || userGuess > 10 && userGuess < 100)
    {
        document.getElementById('message').textContent = 'Ошибка! Введено число вне заданного диапазона', userGuess;
    }

    else if(userGuess === 100)
    {
            document.getElementById('message').textContent = 'Вы успешно взломали игру, загаданное число = '+ secretNumber;
    }

    else
    {
        document.getElementById('message').textContent = 'Неправильно число, попробуйте ещё раз:', userGuess;
    }

    
}