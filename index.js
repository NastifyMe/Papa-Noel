// login
const btn_login = document.querySelector('.btn_login')


function login() {
    const nameLog = document.querySelector('.login_name').value
    const password = document.querySelector('.login_password').value
    if (password === '12' && nameLog){
        document.getElementById('loginDiv').style.display = 'none'
        document.getElementById('container_latter').classList.remove('hidden')
        startTyping()
    } else {
        document.querySelector('.error').innerText = 'Неправильно'
    }

}

btn_login.addEventListener('click', () => {
    login()
})

// snow
const numberOfSnowflakes = 50; // сколько снежинок
for (let i = 0; i < numberOfSnowflakes; i++) {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.innerText = "❄"; // или "*" для простых снежинок
  snow.style.left = Math.random() * 100 + "vw"; // случайная позиция по горизонтали
  snow.style.fontSize = 10 + Math.random() * 15 + "px"; // случайный размер
  snow.style.animationDuration = 5 + Math.random() * 5 + "s"; // разная скорость
  document.body.appendChild(snow);
}

// Letter

const letterDiv = document.getElementById("letter");
let i = 0;


function startTyping() {
    const nameLogin = document.querySelector('.login_name').value
    const text = `Дорогой ${nameLogin}! 🎅\nЯ наблюдал за тобой весь год, и могу сказать,\n что ты вел себя довольно хорошо.\n В этом году тебя ждет много крутого.\n С новым годом, Дед Мороз!`;
    i = 0;             // обнуляем индекс, на случай повторного открытия
    letterDiv.innerHTML = ""; // очищаем содержимое
    typeWriter();

    function typeWriter() {
        if (i < text.length) {
          // Если символ перенос строки, ставим <br>
          letterDiv.innerHTML += text[i] === "\n" ? "<br>" : text[i];
          i++;
          setTimeout(typeWriter, 50); // скорость печати (50 мс)
        }
      }
}