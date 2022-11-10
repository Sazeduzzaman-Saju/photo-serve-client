import React, { useContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Social = () => {
    const { googleLoginProvider, gitLoginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const handleGoogleLogin = () => {
        googleLoginProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }
    const handleGitLogin = () => {
        gitLoginProvider(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }
    return (
        <section className="mb-4">
            <Link onClick={handleGoogleLogin} className="btn btn-outline-light auth-buttons btn-floating m-1" role="button"
            ><FaGoogle /></Link>

            <Link onClick={handleGitLogin} className="btn btn-outline-light auth-buttons btn-floating m-1" role="button"
            ><FaGithub /></Link>
        </section>
    );
};

export default Social;