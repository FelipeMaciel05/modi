import React from 'react';
import Header from "./Header";


function Grupo(){


    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Grupo</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=REM&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Header />

            <div className="grupo">
                <div className="caja-grupo">
                    <form method="post">
                        
                    </form>
                </div>
            </div>

        </body>
        </html>
    );
}

export default Grupo;