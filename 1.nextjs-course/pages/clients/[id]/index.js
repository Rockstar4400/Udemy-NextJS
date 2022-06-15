import { useRouter } from 'next/router';

function ClientProjectPage () {

    const router = useRouter();
    function loadProjectHandler(){
        router.push({
            pathname: '/clients/[id]/[clientproject]',
            query: {id: 'max', clientprojectid: 'projecta'}
        })
    }

    return(
        <div>Client Project
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectPage;
