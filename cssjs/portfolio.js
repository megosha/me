var works = {
    "0": {"title": "qwe1", "description": "qweqwe", "price": "123", "images": ["4-610x299.png", "03-1.jpg"]},
    "1": {"title": "qwe2", "description": "qweqwe", "price": "123", "images": ["3-610x308.png", "03-1.jpg"]},
    "2": {"title": "qwe3", "description": "qweqwe", "price": "123", "images": ["-966x491.png", "05.jpg"]},
    "3": {"title": "qwe4", "description": "qweqwe", "price": "123", "images": ["dezinsector.jpg", "03-1.jpg"]},
    "4": {"title": "qwe5", "description": "qweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqwe qweqweqweqweqweqwe qweqweqweqwe  qweqweqweqwe   qweqwe", "price": "123", "images": ["-966x485.png", "08.jpg"]},
};


function all_works(return_id) {
    var descr = document.getElementById('description');
    descr.innerText = '';
    descr.setAttribute('hidden', true);
     // $(descr).fadeOut("slow");
    for (key in Object.keys(works)){
            if (return_id !== key){
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
    for (img in images){
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
    console.log(li);
    console.log(items);
    var result = `
<div class="main container">
<div class="row justify-content-center">


<!--            <div class="col-md-6">-->
<!--                <div class="text-box align-left">-->
<!--                    <h4 class="card-title1 mbr-fonts-style mbr-normal display-5"><br>${title}</h4>-->
<!--                    <div class="ico-box">-->
<!--                        <span class="pr-2 mbr-iconfont mbr-iconfont-social ico2 mbri-pin"></span>-->
<!--                        <p class="mbr-text mbr-fonts-style item mbr-normal display-7">${description}</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <div class="col-md-6">
                <div class="text-box align-right">
<!--                    <h4 class="card-title2 mbr-fonts-style mbr-normal display-5">Другие работы</h4>-->
                     <button class="btn btn-primary btn-sm" type="button" onclick="all_works(${work_id})">Другие работы</button>
<!--                    <p class="mbr-text mbr-fonts-style sq mbr-normal display-7">${price}</p>-->
                    <div class="card__wrap col-lg-4 col-md-6 col-sm-6">
                
            </div>
                </div>
            </div>
                                        
                                        
            <div class="second-col col-md-10">
                <div class="carousel slide slides" role="listbox" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="5000">
                    <ol class="carousel-indicators">
                    ${li}
                    </ol>
                    <div class="carousel-inner">
                        ${items}
                    </div>
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
    var work = works[number];
    if (work !== undefined) {
        var title = work['title'];
        var description = work['description'];
        var price = work['price'];
        var images = work['images'];
        section.innerHTML = carousel_form(number, title, description, price, images);

        for (key in Object.keys(works)){
            if (number !== key){
                work_preview = document.getElementById(Object.keys(works)[key]);
                work_preview.setAttribute('hidden', true);
            }
        }


        section.removeAttribute('hidden');
        descr.innerText = description;
        descr.removeAttribute('hidden');
        window.initTestimonialsPlugin = true;
        $('.testimonials-slider').each(function () {
            initTestimonialsCarousel(this);
        });
        // section.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    else return false;

}


