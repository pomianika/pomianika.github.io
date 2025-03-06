const FORECASTS = [
  'А помнишь, как блины в ОГ пекли?',
  'А помнишь, как кото-кустов, созданных Гюго, выращивали?',
  'А помнишь, как Джулс за один матч все снитчи съела?',
  'А помнишь, как Когтевран в Слизерин провалился?',
  'А помнишь, как собирали разноцветные бревна для сожжения директора?',
  'А помнишь, как Грейс и Гюго украшали Гремучую Иву цветочными гирляндами?',
  'А помнишь, как Ласс помидорками угощала?',
  'А помнишь, как по всей школе искали пасхальные яйца?',
  'А помнишь, как на вечеринке Мор с крыши упал?',
  'А помнишь, как Грейс в поход на каблуках пошла?',
  'А помнишь, как на уборке в 2023 мы весь замок убирали?'
]

let shownIndices = [];

const getRandomIndex = () => Math.floor(Math.random() * FORECASTS.length);

const handleClick = () => {
  const forecastNode = document.querySelector('.forecast');
  
  if (!forecastNode) {
    return;
  }
  
  if (shownIndices.length === FORECASTS.length) {
    shownIndices = [shownIndices[shownIndices.length - 1]];
  }
  
  let randomIndex = getRandomIndex();
  
  while(shownIndices.includes(randomIndex)) {
    randomIndex = getRandomIndex();
  }

  const randomForecast = FORECASTS[randomIndex];
  shownIndices.push(randomIndex);
  
  forecastNode.textContent = randomForecast;
}

const button = document.querySelector('.button');

if (button) {
  button.addEventListener('click', handleClick)
}