const second = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minutNum = document.querySelector('.minutes')
let time = new Date()
let sec = time.getSeconds() * 6

function clock() {
    sec += 0.2
    let time = new Date()
    let min = time.getMinutes() * 6
    let hours = time.getHours() * 30
    second.style.transform = `rotate(${sec}deg)`
    minut.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hours}deg)`

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


    setTimeout(() => {
        clock()
    }, 1000 / 30);
}

clock()


const tabsItem = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            content[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        content[i].classList.add('active')

    })

}

const btn = document.querySelector(".stopwatch__btn"),
    a = document.querySelector(".stopwatch__hours"),
    b = document.querySelector(".stopwatch__minutes"),
    c = document.querySelector(".stopwatch__seconds"),
    d = document.querySelector(".tabsLink__span"),
    e = document.querySelector(".stopwatch__btn2")

btn.addEventListener('click', function () {
    rename(this)
})

function rename(btn) {
    if (btn.innerHTML == 'старт') {
        btn.innerHTML = 'стоп'
    } else if (btn.innerHTML == 'стоп') {
        btn.innerHTML = 'сброс'
    } else if (btn.innerHTML == 'сброс') {
        btn.innerHTML = 'старт'
    }
}

function secundamer() {
    if (btn.innerHTML == 'стоп') {
        c.innerHTML++
        if (c.innerHTML > 59) {
            c.innerHTML = 0
            b.innerHTML++
            if (b.innerHTML > 59) {
                b.innerHTML = 0
                a.innerHTML++
            }
        }
        d.classList.remove("active_clear")
        d.classList.add("active");
        e.style.display = "none";
    } else if (btn.innerHTML == 'старт') {
        c.innerHTML = 0
        b.innerHTML = 0
        a.innerHTML = 0
        d.classList.remove("active_clear")
        e.style.display = "none";
    }
    else if (btn.innerHTML == "сброс") {
        c.innerHTML
        b.innerHTML
        a.innerHTML
        e.style.display = "inline";
        d.classList.remove("active")
        d.classList.add("active_clear")
    }

    setTimeout(() => {
        secundamer()
    }, 1000);
}

secundamer()

e.addEventListener('click', function () {
    e.style.display = "none";
    btn.innerHTML = 'стоп'
    f()
})

function f() {
    c.innerHTML
    if (c.innerHTML > 59) {
        c.innerHTML = 0
        b.innerHTML++
        if (b.innerHTML > 59) {
            b.innerHTML = 0
            a.innerHTML++
        }
    }
    setTimeout(() => {
        f()
    }, 1000);
}
