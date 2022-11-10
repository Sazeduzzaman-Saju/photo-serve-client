import React, { useContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Social = () => {
    const { googleLoginProvider, gitLoginProvider } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
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
    const handleFacebookLogin = () => {
        gitLoginProvider(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => console.error(e))
    }
    return (
        <section class="mb-4">

            <Link onClick={handleFacebookLogin} class="btn btn-outline-light auth-buttons btn-floating m-1" role="button"
            ><FaFacebook /></Link>

            <Link onClick={handleGoogleLogin} class="btn btn-outline-light auth-buttons btn-floating m-1" role="button"
            ><FaGoogle /></Link>

            <Link onClick={handleGitLogin} class="btn btn-outline-light auth-buttons btn-floating m-1" role="button"
            ><FaGithub /></Link>
        </section>
    );
};

export default Social;