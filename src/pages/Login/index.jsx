import React, { useState } from 'react';
import { styles } from './styles';


export const LoginPage = ({
    onLogin,
    // onGoogleLogin,
    // onAppleLogin,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignInHovered, setIsSignInHovered] = useState(false);
    const [isSignInActive, setIsSignInActive] = useState(false);
    const [isGoogleHovered, setIsGoogleHovered] = useState(false);
    const [isAppleHovered, setIsAppleHovered] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin) {
            onLogin(email, password);
        }
    };

    const getSignInButtonStyle = () => {
        let buttonStyle = { ...styles.signInButton };
        if (isSignInHovered) {
            Object.assign(buttonStyle, styles.signInButtonHover);
        }
        if (isSignInActive) {
            Object.assign(buttonStyle, styles.signInButtonActive);
        }
        return buttonStyle;
    };

    const getGoogleButtonStyle = () => {
        let buttonStyle = { ...styles.googleButton };
        if (isGoogleHovered) {
            Object.assign(buttonStyle, styles.googleButtonHover);
        }
        return buttonStyle;
    };

    const getAppleButtonStyle = () => {
        let buttonStyle = { ...styles.appleButton };
        if (isAppleHovered) {
            Object.assign(buttonStyle, styles.appleButtonHover);
        }
        return buttonStyle;
    };

    const getInputStyle = (isFocused) => {
        let inputStyle = { ...styles.input };
        if (isFocused) {
            Object.assign(inputStyle, styles.inputFocus);
        }
        return inputStyle;
    };

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                {/* Logo Placeholder */}
                <div style={styles.logoContainer}>
                    <div style={styles.logo}>
                        <img src="../../../Assets/logo-github-white.png" alt="Logo" style={styles.logoImage} />
                    </div>
                </div>

                {/* Company Name */}
                <h1 style={styles.companyName}>
                    Sign in to GitHub
                </h1>

                {/* Login Form */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    {/* Username or Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            style={styles.label}
                        >
                            Username or Email Address
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                            style={getInputStyle(emailFocused)}
                            placeholder=""
                            required
                        />
                    </div>

                    {/* -------------------Password Field -------------------*/}
                    <div style={styles.labels}>
                        <div style={styles.label}>

                            <label
                                htmlFor="password"

                            >
                                Password
                            </label>
                            <label style={styles.forgotPassword}
                                htmlFor="Forgot password?"
                            >
                                Forgot password?
                            </label>
                        </div>


                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            style={getInputStyle(passwordFocused)}
                            placeholder=""
                            required
                        />
                    </div>

                    {/* ----------------------------- Sign In Button ----------------------------- */}
                    <button
                        type="submit"
                        style={getSignInButtonStyle()}
                        onMouseEnter={() => setIsSignInHovered(true)}
                        onMouseLeave={() => setIsSignInHovered(false)}
                        onMouseDown={() => setIsSignInActive(true)}
                        onMouseUp={() => setIsSignInActive(false)}
                    >
                        Sign In
                    </button>
                </form>

                {/* ----------------------------- Divider ----------------------------- */}
                <div style={styles.dividerContainer}>
                    <div style={styles.dividerLine}></div>
                    <span style={styles.dividerText}>or</span>
                    <div style={styles.dividerLine}></div>
                </div>

                {/* ----------------------------- Social Login Buttons ----------------------------- */}
                <div style={styles.socialButtonsContainer}>

                    {/* ----------------------- Continue with Google ---------------------------*/}
                    <button
                        type="submit"
                        style={getGoogleButtonStyle()}
                        onMouseEnter={() => setIsGoogleHovered(true)}
                        onMouseLeave={() => setIsGoogleHovered(false)}
                        onMouseDown={() => setIsGoogleActive(true)}
                        onMouseUp={() => setIsGoogleActive(false)}
                    >
                        <svg
                            style={styles.googleIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Continue with Google
                    </button>
                    {/* ------------------------- Continue with Apple --------------------------*/}
                    <button
                        type="submit"
                        style={getAppleButtonStyle()}
                        onMouseEnter={() => setIsAppleHovered(true)}
                        onMouseLeave={() => setIsAppleHovered(false)}
                        onMouseDown={() => setIsAppleActive(true)}
                        onMouseUp={() => setIsAppleActive(false)}
                    >
                        <svg
                            style={styles.appleIcon}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        Continue with Apple
                    </button>

                    {/* ------------------------- New to Github? --------------------------*/}

                    <div style={styles.divAccounts}>
                        <span>New to GitHub? </span>
                        <span style={styles.newAccountLinks}> Create an account</span>
                        <p style={styles.newAccountLinks}>Sign in with a passkey</p>
                    </div>
                </div>
            </div>

            {/* ---------------------------- Footer -----------------------------*/}

            <div style={styles.footer}>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Dos</span>
                    <span>Contact GitHub Suport</span>
                    <span>Manage Cookies</span>
                    <span>Do not share my personal information</span>
            </div>
        </div>
    );
};
