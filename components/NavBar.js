import Link from 'next/link';

const NavBar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>

        <style jsx>
            {`
                ul {
                    background: #ddd;
                    color: #fff;
                    list-style: none;
                    display: flex;
                }

                ul li {
                    font-size: 18px;
                    margin-right: 20px;
                }

                u li a {
                    color: #fff;
                    text-decoration: none;
                }

            `}
        </style>
    </div>
);

export default NavBar;