var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");
var body = document.getElementById("body");

function ChangeTheme(btn_id)
{

    var currTheme = link.getAttribute("href");

    let path_theme = `cssjs/${btn_id}.css`;
    document.cookie = `theme-choice=${btn_id}`;
    if (currTheme !== path_theme){
        link.setAttribute("href", path_theme);
        // body.classList.remove('wibro');
    }
    else
        // {
    //     if (body.classList.contains('wibro')){
    //         body.classList.remove('wibro');
    //     }
    //     body.classList.add('wibro');
    // }
    body.classList.add('wibro');
    setTimeout(() => body.classList.remove('wibro'), 250);

        // alert(':P');
    ym(66628003,'reachGoal','btn_006'); return true;
}