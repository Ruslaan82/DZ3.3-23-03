const tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent')

let intervalId = null;

let index = 0;

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active')
}

intervalId = setInterval(()=> {
    if(index === tabs.length - 1) {
        hideTabContent()
        index = 0
        showTabContent(index)
    }else {
        hideTabContent()
        index++
        showTabContent(index)
    }
}, 2500)

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                clearInterval(intervalId)
                hideTabContent()
                showTabContent(index)
            }
        })
    }
})


// modal
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
setTimeout(() => openModal(), 10000)

modal.addEventListener('click', event => {
    event.target === modal ? closeModal() : false
})

window.addEventListener('keydown', event => {
    event.code = 'Escape' ? closeModal() : false
})


// data
const deadline = '2023-03-28';

function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date;
    const days = Math.floor((time / (1000 * 60 * 60 * 24)))
    const hours = Math.floor((time / (1000 * 60 * 60) % 24))
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element)
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')


    setInterval(updateClock, 1000)
    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
    }
}

setClock('.timer', deadline)







