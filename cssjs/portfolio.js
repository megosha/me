var works = {
    "4": {
        "company":'МОО "Скажи жизни"ДА!"',
        "title": "Многостраничный сайт с системой управления содержимым (CMS)",
        "description": "<b>Frontend:</b> разработка интерфейса 12 страниц сайта, поиск изображений  <br><b>Backend:</b> кастомизация главной страницы, проектов, новостных разделов, разделов с отчетами и документами, форма обратной связи с возможностью отправлять копии обращений для нескольких электронных почт" +
            "<br><b>Дополнительно:</b> редактирование логотипа, конфигурация базы данных, размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["-966x485.png"]
    },
     "3": {
        "company":'ООО "АЛЬТЕНА"',
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга, поиск изображений  <br><b>Backend:</b> реализация формы заказа расчета стоимости с динамической подгрузкой необходимых полей в зависимости от выбора параметров, форма обратной связи Email, обращение через WhatsApp" +
            "<br><b>Дополнительно:</b> доработка логотипа, размещение сайта с сопутствующими настройками сервисов и служб, настройка рекламы Яндекс.Директ, настройка Яндекс.Метрика, индексирование сайта в поисковых системах",
        "price": "",
        "images": ["dezinsector.jpg"]},
     "2": {
        "company":'ББФ "Дом милосердия"',
        "title": "Многостраничный сайт с системой управления содержимым (CMS)",
        "description": "<b>Frontend:</b> разработка интерфейса 8 страниц сайта, поиск изображений <br><b>Backend:</b> синхронизация с Instagram аккаунтом для автоматического формирования новостной ленты, кастомизация новостных разделов, управления данными партнёров, разделов с отчетами и документами, форма обратной связи с возможностью отправлять копии обращений для нескольких электронных почт" +
            "<br><b>Дополнительно:</b> конфигурация базы данных, размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["-966x491.png"]},
     "1": {
        "company":"Благотворительный проект",
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга, поиск изображений <br><b>Backend:</b> форма онлайн-регистрации в проекте" +
            "<br><b>Дополнительно:</b> размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["3-610x308.png"]},
    "0": {
        "company":"Помощь плюс",
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга<br><b>Backend:</b> форма онлайн-заказа медицинского такси" +
            "<br><b>Дополнительно:</b> размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["4-610x299.png"]},
};


function form_list(div_id, slice=0) {
    var result = '';
    for (var key = Object.keys(works).length-1; key >= slice; key--) {
        result += `
             <div class="card__wrap col-lg-4 col-md-6 col-sm-6" onclick="portfolio_item('${key}')" id="${key}">
                <div class="card">
                    <div class="image__card">
                        <img src="assets/images/${works[key]["images"][0]}" alt="" title="">
                         <div class="card__info">
                            <h4 class="card__title mbr-fonts-style display-7"><b>${works[key]["title"]}</b></h4>
                            <p class="card__text mbr-fonts-style display-4">${works[key]["company"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    result += `<p class="mbr-text col-lg-5 col-md-6 col-sm-6 mbr-fonts-style item mbr-normal display-7 hide" id="description"></p>
            <div class="col-lg-3 col-md-6 col-sm-6 text-center" id="return_btn"></div>`;
    document.getElementById(div_id).innerHTML = result;
}


function all_works(return_id) {
    // returns all works mode
    var descr = document.getElementById('description');
    descr.innerText = '';
    $('#description').addClass('hide')

    document.getElementById('return_btn').innerText = '';

    for (key in Object.keys(works)) {
        if (return_id !== key) {
            work_preview = document.getElementById(Object.keys(works)[key]);
            work_preview.removeAttribute('hidden');
        }
    }
    document.getElementById(return_id).scrollIntoView({behavior: 'smooth', block: 'center'});
    section = document.getElementById('extGallery6-1f');
    section.setAttribute('hidden', true);
}


function carousel_form(work_id, title, description, price, images) {
    var li = '';
    var items = '';
    for (img in images) {
        li += `<li class="li1" data-slide-to="${img}" style="background-image: url('assets/images/${images[img]}');"></li>`;
        items += `
                    <div class="carousel-item">
                        <div class="media-container-row">
                            <div class="col-md-12">
                                <div class="wrap-img" style="background-image: url('assets/images/${images[img]}');">
                                </div>
                            </div>
                        </div>
                    </div>`
    }
    var result = `
        <div class="main container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-box align-right">
                        <div class="card__wrap col-lg-4 col-md-6 col-sm-6"></div>
                    </div>
                </div>
                                        
                <div class="second-col col-md-10">
                    <div class="carousel slide slides" role="listbox" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="5000">
                        <ol class="carousel-indicators">${li}</ol>
                        <div class="carousel-inner">${items}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.initTestimonialsPlugin = true;
    $('.testimonials-slider').each(function () {
        initTestimonialsCarousel(this);
    });
    return result;
}

function portfolio_item(number) {
    var section = document.getElementById('extGallery6-1f');
    var descr = document.getElementById('description');
    var return_btn = document.getElementById('return_btn');
    var work = works[number];
    if (work !== undefined) {
        var title = work['title'];
        var description = work['description'];
        var price = work['price'];
        var images = work['images'];
        section.innerHTML = carousel_form(number, title, description, price, images);


        for (key in Object.keys(works)) {
             console.log(key);
            if (number !== key) {
                work_preview = document.getElementById(Object.keys(works)[key]);
                work_preview.setAttribute('hidden', true);
            }
        }

        section.removeAttribute('hidden');
        descr.innerHTML = description;
        $('#description').removeClass('hide');
        return_btn.innerHTML = `<button class="btn btn-primary btn-sm" type="button" onclick="all_works(${number})">Другие работы</button>`;
        window.initTestimonialsPlugin = true;
        $('.testimonials-slider').each(function () {
            initTestimonialsCarousel(this);
        });
        descr.scrollIntoView({behavior: 'smooth', block: 'center'});
    } else return false;

}


