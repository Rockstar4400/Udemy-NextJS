import Link from 'next/link';

function HomePage (){
    return (
    <div>
        <ul>
            <li>
                <Link href="/portfolio">
                    Portfolio
                </Link>
            </li>
            <li>
                <Link href="/clients">                    Client
                </Link>
            </li>
        </ul>
    </div>
    );
}

export default HomePage;
