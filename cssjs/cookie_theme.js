        function get_cookie ( cookie_name )
            {
              var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

              if ( results ){
                  console.log(unescape ( results[2] ) );
                  path_theme = `cssjs/${( unescape ( results[2] ) )}.css`;
              }
              else
                path_theme = `cssjs/dark.css`;
            document.getElementById("theme-link").setAttribute("href", path_theme);
            }