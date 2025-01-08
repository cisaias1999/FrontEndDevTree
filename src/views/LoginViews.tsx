import {Link } from 'react-router-dom';

export default function LoginViews() {
    return (
        <div>
            <h1>Login</h1>

            <Link to="/auth/register">Register go</Link>
            
        </div>
    );
}