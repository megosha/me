var works = {
    "4": {
        "company":'МОО "Скажи жизни"ДА!"',
        "title": "Многостраничный сайт с системой управления содержимым (CMS)",
        "description": "<b>Frontend:</b> разработка интерфейса 12 страниц сайта, поиск изображений  <br><b>Backend:</b> кастомизация главной страницы, проектов, новостных разделов, разделов с отчетами и документами, форма обратной связи с возможностью отправлять копии обращений для нескольких электронных почт" +
            "<br><b>Дополнительно:</b> редактирование логотипа, конфигурация базы данных, размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["sjd_main.jpg", "sjd_project.jpg", "sjd_mobile.jpg"],
    },
     "3": {
        "company":'ООО "АЛЬТЕНА"',
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга, поиск изображений  <br><b>Backend:</b> реализация формы заказа расчета стоимости с динамической подгрузкой необходимых полей в зависимости от выбора параметров, форма обратной связи Email, обращение через WhatsApp" +
            "<br><b>Дополнительно:</b> доработка логотипа, размещение сайта с сопутствующими настройками сервисов и служб, настройка рекламы Яндекс.Директ, настройка Яндекс.Метрика, индексирование сайта в поисковых системах",
        "price": "",
        "images": ["dez_main.jpg", "dez_form.jpg", "dez_service.jpg", "dez_mobile.jpg"]},
     "2": {
        "company":'ББФ "Дом милосердия"',
        "title": "Многостраничный сайт с системой управления содержимым (CMS)",
        "description": "<b>Frontend:</b> разработка интерфейса 8 страниц сайта, поиск изображений <br><b>Backend:</b> синхронизация с Instagram аккаунтом для автоматического формирования новостной ленты, кастомизация новостных разделов, управления данными партнёров, разделов с отчетами и документами, форма обратной связи с возможностью отправлять копии обращений для нескольких электронных почт" +
            "<br><b>Дополнительно:</b> конфигурация базы данных, размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["dm_main.jpg", "dm_lenta.jpg", "dm_mobile.jpg"]},
     "1": {
        "company":"Благотворительный проект",
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга, поиск изображений <br><b>Backend:</b> форма онлайн-регистрации в проекте, ручная настройка даты проведения проекта, автоматический сброс даты проведения по прошествию проекта" +
            "<br><b>Дополнительно:</b> размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["dmp_main.jpg", "dmp_form.jpg", "dmp_mobile.jpg"]},
    "0": {
        "company":"Помощь плюс",
        "title": "Лендинг",
        "description": "<b>Frontend:</b> разработка интерфейса лендинга<br><b>Backend:</b> форма онлайн-заказа медицинского такси" +
            "<br><b>Дополнительно:</b> размещение сайта на сервере с сопутствующими настройками сервисов и служб",
        "price": "",
        "images": ["pp_main.jpg", "pp_mobile.jpg"]},
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
    result += `<p class="mbr-text col-lg-5 col-md-6 col-sm-6 mbr-fonts-style item mbr-normal display-7 theme-main-text" id="description"></p>
            <div class="col-lg-3 col-md-6 col-sm-6 text-center" id="return_btn"></div>`;
    document.getElementById(div_id).innerHTML = result;
    // document.getElementById('description').classList.add("animated");
}


function all_works(return_id) {
    // returns all works mode
    var descr = document.getElementById('description');
    descr.innerText = '';
    descr.setAttribute('hidden', true);
    // $('#description').addClass('hide')

    document.getElementById('return_btn').innerText = '';

    for (key in Object.keys(works)) {
        if (return_id !== key) {
            work_preview = document.getElementById(Object.keys(works)[key]);
            work_preview.removeAttribute('hidden');
        }
    }
    document.getElementById(return_id).scrollIntoView({behavior: 'smooth', block: 'center'});
    section = document.getElementById('gallery2-1l');
    section.setAttribute('hidden', true);
    ym(66628003,'reachGoal','btn_009'); return true;
}


function carousel_form(work_id, title, description, price, images) {
    var li = '';
    var items = '';
    for (img in images) {
        li += `<div class="mbr-gallery-item mbr-gallery-item--p1" data-video-url="false" data-tags="">
                    <div href="#lb-gallery2-1l" data-slide-to="${img}" data-toggle="modal">
                        <img src="assets/images/${images[img]}" alt="" title="">
                        <span class="icon-focus"></span>
<!--                        <span class="mbr-gallery-title mbr-fonts-style display-7">${img}</span>-->
                   </div>
               </div>`;
        if (img == 0){
            items += `<div class="carousel-item active"><img src="assets/images/${images[img]}" alt="" title=""></div>`
        }
        else {
            items += `<div class="carousel-item"><img src="assets/images/${images[img]}" alt="" title=""></div>`
        }

    }
    var result = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-10"></div>
            </div>
        </div>
        <div>
            <div class="pt-5">
                <!-- Gallery -->
                <div class="mbr-gallery-row align-center">
                    <div class="mbr-gallery-layout-default">
                        <div>
                            <div>
                                ${li}
                            </div> 
                        </div>
                        <div class="clearfix"></div>  
                   </div>           
                </div>    
                <!-- Lightbox -->
                <div data-app-prevent-settings="" class="mbr-slider modal fade carousel slide" tabindex="-1" data-keyboard="true" data-interval="false" id="lb-gallery2-1l">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="carousel-inner">
                                    ${items}
                                </div>
                                <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-1l">
                                    <span class="mbri-left mbr-iconfont" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-1l">
                                    <span class="mbri-right mbr-iconfont" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                <a class="close" href="#" role="button" data-dismiss="modal">
                                    <span class="sr-only">Close</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return result;
}

function portfolio_item(number) {
    var section = document.getElementById('gallery2-1l');
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
            if (number !== key) {
                work_preview = document.getElementById(Object.keys(works)[key]);
                work_preview.setAttribute('hidden', true);
            }
        }

        section.removeAttribute('hidden');
        descr.innerHTML = description;
        descr.removeAttribute('hidden');
        // $('#description').removeClass('hide');
        return_btn.innerHTML = `<button class="btn btn-primary btn-sm" type="button" onclick="all_works(${number})">Другие работы</button>`;
        window.initTestimonialsPlugin = true;
        $('.testimonials-slider').each(function () {
            initTestimonialsCarousel(this);
        });
        descr.scrollIntoView({behavior: 'smooth', block: 'center'});
    } else return false;

}



