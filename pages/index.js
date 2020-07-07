import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
//didn't work with  <a>Auth</a> so I removed <a></a> Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>

const indexPage = () => (

    <div>
        <h1>Main Page</h1>
        <p>Go to <Link href="/auth"> Auth </Link> </p>
    <button onClick={() => Router.push('/auth')}>Go to Auth </button>
    </div>
);

export default indexPage;