export default function Profile({ params }: { params: { id: string } }) {

    return (
        <html>
            <body>
                <div>
                    <head>
                        <title>Profil</title>
                    </head>
                    <h1>Profil użytkownika {params.id}</h1>
                </div>
            </body>
        </html>
    );  
  }