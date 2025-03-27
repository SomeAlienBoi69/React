import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';


export default function Profile({ params }: { params: { id: string } }) {

    return (
        <div>
            <title>Profil</title>
            <h1>Profil użytkownika {params.id}</h1>
        </div>
    );  
  }