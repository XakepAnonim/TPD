let cards = [
    {
        title: 'Официальные источники',
        text: 'Только официальные источники ГИБДД, ГИС ГМП, МОС РУ, ФССП'
    },
    {
        title: 'Скорость оповещений',
        text: 'Мы быстро получаем штрафы и показываем полную информацию с фото'
    },
    {
        title: 'Фото штрафов',
        text: 'Максимум информации по штрафам, включая фото и место нарушения.'
    },
    {
        title: '50% скидка при оплате',
        text: 'Вовремя оповестим о штрафе, чтобы не пропустить скидку'
    },
    {
        title: 'Скорость оповещений',
        text: 'Мы быстро получаем штрафы и показываем полную информацию с фото'
    },
    {
        title: 'Гарантия оплаты',
        text: 'Мы быстро получаем штрафы и показываем полную информацию с фото'
    }
]

const cardsElement = document.querySelector('.cards');

cards.forEach(card => {
    const Card = document.createElement('div');
    Card.classList.add('card');
    Card.insertAdjacentHTML('beforeend',
        `
        <h4 class="card__title">${card.title}</h4>
        <p class="card__text">${card.text}</p>
        `
    );
    cardsElement.appendChild(Card);
});