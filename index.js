// login
const btn_login = document.querySelector('.btn_login')


function login() {
    const nameLog = document.querySelector('.login_name').value
    const password = document.querySelector('.login_password').value
    if (password === 'Papa Noel 2026' && nameLog){
        document.getElementById('loginDiv').style.display = 'none'
        document.getElementById('container_latter').classList.remove('hidden')
        startTyping()
    } else {
        document.querySelector('.error').innerText = 'Неправильно ❌'
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

const btn_letter = document.querySelector('.btn_next')


btn_letter.addEventListener('click', (e) => {
    if (e) {
        document.getElementById('container_latter').classList.add('hidden')
        document.getElementById('container_statistics').classList.remove('hidden')
        showStats()
    }
})

// statistics

const btn_back = document.querySelector('.btn_back_stat')

btn_back.addEventListener('click', (e) => {
    if (e) {
        document.getElementById('container_latter').classList.remove('hidden')
        document.getElementById('container_statistics').classList.add('hidden')
    }
})

function showStats() {
    setTimeout(() => {document.getElementById('stat1').style.width = '80%'}, 100)
    setTimeout(() => {document.getElementById('stat2').style.width = '100%'}, 200)
    setTimeout(() => {document.getElementById('stat3').style.width = '90%'}, 400)
}

const btn_stat = document.querySelector('.btn_next_stat')

btn_stat.addEventListener('click', (e) => {
    if (e) {
        document.getElementById('container_statistics').classList.add('hidden')
        document.getElementById('container_gift').classList.remove('hidden')
    }
})

// Gifts

const giftContent = document.getElementById('giftContent')
const gift = document.getElementById('gift')
const items = document.querySelectorAll('.item-gift')

gift.addEventListener('click', () => {
    gift.style.opacity = '0'
    gift.style.transform = 'scale(0.5)'

    showConf()

    setTimeout(() => {
        gift.style.display = 'none'
        giftContent.classList.remove('hidden-gift')

        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show')
            }, index * 400)
        })
    }, 400)
})

function showConf() {
    for(let i=0;i<100;i++){
        const c=document.createElement("div");
        c.className="confetti";
        c.style.left=Math.random()*100+"vw";
        c.style.background=['red','yellow','blue','green','purple'][i%5];
        c.style.animationDuration=(3+Math.random()*3)+"s";
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),6000);
      }
}

const btn_back_gift = document.querySelector('.btn_back_gift')

btn_back_gift.addEventListener('click', (e) => {
    if (e) {
        document.getElementById('container_gift').classList.add('hidden')
        document.getElementById('container_statistics').classList.remove('hidden')
    }
})
