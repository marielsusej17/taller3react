import React, { useState }  from 'react'

export const UseContext = () => {
    return (
        <>
        <Component1/>
        </>
    )
}

function Component1() {
    const [user ] = useState("Linux!");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    );
}

function Component2({ user }) {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
