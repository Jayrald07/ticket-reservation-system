import React from 'react'
import './index.account.css'

export default function Account(props) {
    return (
        <div className="tk_account_wrapper">
            <main>
                <h1>Sign-In</h1>
                <form>
                    <label htmlFor="username">Username/Email</label>
                    <input id="username" type="text" placeholder="juandelacruz@email.com"/>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                    <label class="tk_remember_me"><input type="checkbox" /><span>Remember Me</span></label>
                    <a href="#" id="tk_not_registered">Not Registered Yet?</a>
                    <button type="submit" >Let's Go!</button>
                </form>
            </main>
            <aside>
                <div>
                    <h2>Find, Buy</h2>
                    <h1>and Reserve the Excitement</h1>
                </div>
            </aside>
        </div>
    )
}