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
  'А помнишь, как на уборке в 2023 мы весь замок убирали?',
  'А помнишь мы делали шкатулки?',
'А помнишь мы записывали подкаты?',
'А помнишь свечи, из-за которых выиграли дуэль?',
'А помнишь министерство цветочного хозяйства?',
'А помнишь жаркие трибуны и бесконечные кричалки на ВШТ?',
'А помнишь клубкопухов?',
'А помнишь сколько денег потратили потратили в ЛОХе на Рождественской ярмарке?',
'А помнишь рекомендовали упаковать Ариадну в ковер и потащить в подземелья?',
'А помнишь как искали на масленицу по замку ингредиенты, рецепт и кухонную утварь?',
'А помнишь как на ДОД Когтеврана участвовали в театральной постановке?',
'А помнишь какие классные были лекции профессора Унсет по магической криминалистике?',
'А помнишь как Леон был старостой Гриффиндора?',
'А помнишь стекло, которое устроили Абсент и Леон?',
'А помнишь как Абсент написал домашку профессору Бруку на туалетной бумаге?',
'А помнишь первый командный квиддичный матч?',
'А помнишь как Абсент и Лита дважды сыграли свадьбу, чтобы снять венец безбрачия друг с друга?',
'А помнишь как профессор Крин запретил кроссворды после кроссвордов Абсента?',
'А помнишь, как искали домовика профессора Унсет и всех подозревали?',
'А помнишь, как в общей гостиной было собрание Василисков на день Слизерина?',
'А помнишь вы приехали к нам на легендарную ночевку?',
'А помнишь, как Мор и Лива делили Альдонсо друг с другом?',
'А помнишь комментарии к работам МХД: ты думала там будет критика, но на твоём лице засияла улыбка?',
'А помнишь день, когда решила вернуться в Хогвартс?',
'А помнишь как ты боялась открыть первый полученный комментарий к домашней работе?',
'А помнишь, как Вдович, чтобы проверить, ведьма ли Тринити Дженкин, топил её в вине (спойлер: она ведьма и не утонула)?',
'А помнишь, как Гаюшка и Сэм Смейл в Беклин на люстру лезли и беклячьи яйца похищали?',
'А помнишь, как Гаюшка Тину Рид дракону скормил. а потом ещё раз?',
'А помнишь, как слизеринка с когтевранцем в черепах олимпийцев высматривали?',
'А помнишь, как слизеринка с когтевранцем запустили производство моральной выпечки?',
'А помнишь, как Гаюшка с Тиной Рид мышей ели?',
'А помнишь Минхастера?',
'А помнишь, как на КСД студенты сражались с пожирателями смерти?', 
'А помнишь, как конкурс мемов проводился только на Когтевране?',
'А помнишь, как гости из Магисмо узнали, что Злобному магу очень грустно всё время сидеть только в замке?',
'А помнишь, как на эфирах Виктории Говард традиционно играла "Дива"?',
'А помнишь, как из кабинета вампирологии сбежал вампир?',
'А помнишь, как при поимке вампира отряд чуть не спалил библиотеку?',
'А помнишь, как Том сбил Грейс и они оба оказались в БК во втором раунде игры?',
'А помнишь, как когтевранцы решили выкрасть распределяющую шляпу?',
'А помнишь, как когтевранцы устроили вечеринку в комнате Винса, чтобы Роки помогла украсть распределяющую шляпу?',
'А помнишь, как в ОГ появилась картина "Роки-слизняк"?',
'А помнишь, как был организован Клуб Разбитых Надежд?',
'А помнишь, как Грейс говорила , что у неё аллергия на Томаса Брука из-за того что постоянно краснела при нём?',
'А помнишь, как Грейс настолько кринжово ответила на загадку ворона, что он её пропустил без ответа?',
'А помнишь, как Грейс с Мэйсоном пошли вместе на бал, а потом они вместе стали старостами?',
'А помнишь, как Грейс выиграла мисс ХД 2022?',
'А помнишь как Натаниэль Гриффиндором управлял (пока старост и декана похитили пираты?',
'А помнишь как Ласс квоффл отбивала (трагичная была история, никогда не давайте ей летать за вратаря?',
'А помнишь как Пётр Первый ревновал Басманова к Грозному?',
'А помнишь как Натаниэль нюхлеров разводил?',
'А помнишь как Лайт хорош?',
'А помнишь как Миичка питалась лимонами?',
'А помнишь как Гриффиндор переезжал жить в подземелья на пару недель?',
'А помнишь как Роки сохраняла пунктуальность автора?',
'А помнишь как Спелл подарил Гюго корону и сказал, что она станет лучшим Министром Магии?',
'А помнишь как Гюго на своем первом ВШТ не знала как ловить квофл?',
'А помнишь как каждый год Гюго записывали в ВШТ по умолчанию?',
'А помнишь как ездили в Магисмо на турнир волшебников?',
'А помнишь как Гюго и Грейс отправились в путешествие на лодке?',
'А помнишь как открылся клуб игры в мафию?',
'А помнишь как число питомцев Гюго перевалило за 30?',
'А помнишь как с подачи Ласс, Гюго стали называть Хагридом?',
'А помнишь первый Турнир Зельеваров?',
'А помнишь как Лита праздновали?',
'А помнишь как с Распределяющей Шляпой фотографировались?',
'А помнишь как ключи собирали на День Равноденствия?',
'А помнишь как всей школой праздновали 16летие Грейс Даймонд-де-Кур?',
'А помнишь как Когтевран всю школу втянул в конкурс мемов?',
'А помнишь юбилей КУД?',
'А помнишь битву на викторине Литературного клуба?',
'А помнишь как на ДОД Слизерина путешествовали с павлином, обезьянкой, змеей и кошкой-ифриткой?',
'А помнишь как беклы Хогсмид захватили?'
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
