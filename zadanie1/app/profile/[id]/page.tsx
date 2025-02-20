export default function Profile({ params }: { params: { id: string } }) {
    return (
        <div>
            <header>
                <title>Profil użytkownika</title>
            </header>
            <h1>Profil użytkownika {params.id}</h1>
        </div>
    );
  }