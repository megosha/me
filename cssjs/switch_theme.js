var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "cssjs/light.css";
    let darkTheme = "cssjs/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme === lightTheme)
    {
   	 currTheme = darkTheme;
   	 // theme = "dark";
    }
    else
    {
   	 currTheme = lightTheme;
   	 // theme = "light";
    }

    link.setAttribute("href", currTheme);

    // Save(theme);
}