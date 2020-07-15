var works = {
    "0": {"title": "qwe1", "description": "qweqwe", "price": "123", "images": ["4-610x299.png", "03-1.jpg"]},
    "1": {"title": "qwe2", "description": "qweqwe", "price": "123", "images": ["3-610x308.png", "03-1.jpg"]},
    "2": {"title": "qwe3", "description": "qweqwe", "price": "123", "images": ["-966x491.png", "05.jpg"]},
    "3": {"title": "qwe4", "description": "qweqwe", "price": "123", "images": ["dezinsector.jpg", "03-1.jpg"]},
    "4": {"title": "qwe5", "description": "qweqwe", "price": "123", "images": ["-966x485.png", "08.jpg"]},
};

function carousel_form(title, description, price, images) {
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


            <div class="col-md-6">
                <div class="text-box align-left">
                    <h4 class="card-title1 mbr-fonts-style mbr-normal display-5"><br>${title}</h4>
                    <div class="ico-box">
                        <span class="pr-2 mbr-iconfont mbr-iconfont-social ico2 mbri-pin"></span>
                        <p class="mbr-text mbr-fonts-style item mbr-normal display-7">${description}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-box align-right">
                    <h4 class="card-title2 mbr-fonts-style mbr-normal display-5">${price}</h4>
<!--                    <p class="mbr-text mbr-fonts-style sq mbr-normal display-7">$777 / sq m</p>-->
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
    section = document.getElementById('extGallery6-1f');
    var work = works[number];
    if (work !== undefined) {
        var title = work['title'];
        var description = work['description'];
        var price = work['price'];
        var images = work['images'];
        section.innerHTML = carousel_form(title, description, price, images);

        // for (key in Object.keys(works)){
        //     if (number !== key){
        //         work_preview = document.getElementById(Object.keys(works)[key]);
        //         work_preview.setAttribute('hidden', true);
        //     }
        // }


        section.removeAttribute('hidden');
        window.initTestimonialsPlugin = true;
        $('.testimonials-slider').each(function () {
            initTestimonialsCarousel(this);
        });
        section.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    else return false;

}


