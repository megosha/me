var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

// btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme(btn_id)
{
    // let lightTheme = "cssjs/light.css";
    // let darkTheme = "cssjs/dark.css";
    let path_theme = `cssjs/${btn_id}.css`;

    var currTheme = link.getAttribute("href");
    // var theme = "";

   	 currTheme = path_theme;
   	 // theme = "light";

    link.setAttribute("href", currTheme);

    // Save(theme);
}