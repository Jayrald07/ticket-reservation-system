import React from 'react'

export default function Account(props) {
    return (
        <div>
            <main>
                <form>
                    <label for="username">Username/Email</label>
                    <input id="username" type="text" />
                    <label for="password">Password</label>
                    <input id="password" type="password" />
                    <button type="submit" >Let's Go!</button>
                </form>
            </main>
        </div>
    )
}