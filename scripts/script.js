// modals
function modalMenu(){
    document.querySelector('.modalMenu').classList.toggle('active');
}

// filters
let headSideFilter = document.querySelectorAll('.headSideFilter');
let bodySideFilter = document.querySelectorAll('.bodySideFilter');
if(typeof headSideFilter == 'object'){
    headSideFilter.forEach((el, i) => {
        el.addEventListener('click', e => {
            if(el.textContent == headSideFilter[i].textContent){
                bodySideFilter.forEach((elemBody, j) => {
                    if(i == j){
                        elemBody.classList.toggle('active');
                        el.classList.toggle('active')
                    }
                })
            }
        })
    })
}

// add basket
let plusCount = document.querySelectorAll('.plusCount');
let count = document.querySelectorAll('.count');
if(typeof plusCount == 'object'){
    plusCount.forEach((el, i) => {
        el.addEventListener('click', e => {
            if(el.textContent == plusCount[i].textContent){
                count.forEach((elemCount, j) => {
                    if(i == j){
                        elemCount.textContent = parseInt(elemCount.textContent) + 1
                    }
                })
            }
        })
    })
}

// mini slider
let imageMainProd = document.querySelector('.imageMainProd');
let imagesSlides = document.querySelectorAll('.imagesSlides img');
if(typeof imagesSlides == 'object'){
    imagesSlides.forEach(el => {
        el.addEventListener('mouseover', () => {
            imageMainProd.src = el.src;
        })
    })
}

// text description
let arrData = [
    'Очевидно, что эстетическое воздействие пространственно выбирает былинный голос персонажа, потому что в стихах и в прозе автор рассказывает нам об одном и том же. Мелькание мыслей непосредственно нивелирует палимпсест. Брахикаталектический стих, за счет использования параллелизмов и повторов на разных языковых уровнях, отражает поэтический анапест. Субъективное восприятие дает возврат к стереотипам. Транстекстуальность, в первом приближении, возможна.', 
    'В данной работе мы не будем анализировать все эти аспекты, однако пастиш интуитивно понятен. Цикл, как справедливо считает И.Гальперин, существенно иллюстрирует культурный метр, таким образом постепенно смыкается с сюжетом. Контрапункт начинает мифологический жанр. Познание текста дает прозаический стих, что нельзя сказать о нередко манерных эпитетах. Эвокация начинает пастиш, несмотря на отсутствие единого пунктуационного алгоритма.', 
    'Аллитерация интегрирует замысел. Силлабо-тоника аллитерирует стих. Обсценная идиома, без использования формальных признаков поэзии, начинает замысел. Из нетрадиционных способов циклизации обратим внимание на случаи, когда матрица традиционно начинает парафраз, где автор является полновластным хозяином своих персонажей, а они - его марионетками. Слово, за счет использования параллелизмов и повторов на разных языковых уровнях, осознаёт стих.', 
    'Женское окончание лабильно. Быличка дает символ. Аффилиация наблюдаема. Впечатление диссонирует симулякр. Наш современник стал особенно чутко относиться к слову, однако стилистическая игра дает абстракционизм. Впечатление вразнобой нивелирует амфибрахий.',
    'Гиперцитата, если уловить хореический ритм или аллитерацию на "р", пространственно иллюстрирует эпизодический хорей. Познание текста непосредственно редуцирует зачин, именно об этом говорил Б.В.Томашевский в своей работе 1925 года. Модальность высказывания притягивает возврат к стереотипам. Диалектический характер приводит прозаический реципиент.'
]
let buttonsInfo = document.querySelectorAll('.buttonsInfo button');
let blockTextAll = document.querySelector('.blockTextAll p');
if(typeof buttonsInfo == 'object'){
    blockTextAll.innerHTML = arrData[0];
    buttonsInfo.forEach((el, i) => {
        el.addEventListener('click', () => {     
            clearEffectButtons();  
            el.classList.add('active');
            blockTextAll.innerHTML = arrData[i];
        })
    })
}
function clearEffectButtons(){
    buttonsInfo.forEach(el => {
        el.classList.remove('active');
    })
}