var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");


function ChangeTheme(btn_id)
{
    var currTheme = link.getAttribute("href");

    let path_theme = `cssjs/${btn_id}.css`;
    document.cookie = `theme-choice=${btn_id}`;
    if (currTheme !== path_theme)
        link.setAttribute("href", path_theme);
    else
        alert(':P');
}