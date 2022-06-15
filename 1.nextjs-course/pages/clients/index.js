
import Link from 'next/link';

function ClientPage () {
    const clients =[
        {id: 'max', name: 'Maximilian'},
        {id: 'manuel', name: 'Manuel'}
    ];

        return(
            <div>
                <ul>
                    {clients.map(client => 
                        <li key={client.id}>
                            <Link href={{
                                pathname: '/clients/[id]',
                                query: {id: client.id},
                            }}>
                                {client.name}
                            </Link>
                       </li> 
                    )}
                </ul>
            </div>
        );
}

export default ClientPage;