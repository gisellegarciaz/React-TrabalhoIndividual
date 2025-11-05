export const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0D1117',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        fontFamily: [
            '-apple-system',
            '"system-ui"',
            '"Segoe UI"',
            '"Noto Sans"',
            'Helvetica',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"'
        ].join(', '),
        fontStyle: 'normal',
        fontWeight: '300',
        color: '#F0F6FC',
        fontSize: '1rem',
        lineHeight: '30px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '23rem',
        height: '100vh'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.8rem'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        maxWidth: '85%',
        height: 'auto'
    },
    companyName: {
        fontSize: '1.25rem',
        fontWeight: '500',
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: '2rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '0.7rem'
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#d1d5db'
    },
    labels: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'spaceBetween',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#d1d5db',
        marginBottom: '0.5rem'
    },
    forgotPassword: {
        color: '#3B82F6',
        fontWeight: '300',
        textDecoration: 'underline',
    },
    input: {
        width: '100%',
        padding: '0.75rem 0rem',
        backgroundColor: 'transparent',
        border: '1px solid #374151',
        borderRadius: '0.5rem',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.2s'
    },
    inputFocus: {
        border: '2px solid #3B82F6',
        borderColor: '#3B82F6'
    },
    signInButton: {
        width: '100%',
        background: '#238636',
        color: 'white',
        fontWeight: '300',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontSize: '1rem',
    },
    signInButtonHover: {
        background: '#3a8a4a',
        transform: 'scale(1.005)'
    },
    signInButtonActive: {
        transform: 'scale(0.98)'
    },
    dividerContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem 0'
    },
    dividerLine: {
        flex: 1,
        borderTop: '1px solid #374151'
    },
    dividerText: {
        padding: '0 1rem',
        fontSize: '0.875rem',
        color: '#9ca3af'
    },
    socialButtonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    },
    googleButton: {
        width: '100%',
        backgroundColor: '#212830',
        color: 'white',
        fontWeight: '300',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #4f5255ff',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        fontSize: '1rem'
    },
    googleButtonHover: {
        backgroundColor: '#2a3239'
    },
    googleIcon: {
        width: '1.25rem',
        height: '1.25rem'
    },
    appleButton: {
        width: '100%',
        backgroundColor: '#212830',
        color: 'white',
        fontWeight: '300',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #4f5255ff',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        fontSize: '1rem'
    },
    appleButtonHover: {
        backgroundColor: '#2a3239',
    },
    appleIcon: {
        width: '1.25rem',
        height: '1.25rem'
    },
    divAccounts: {
        margin: '2rem',
        textAlign: 'center',
    },
    newAccountLinks: {
        color: '#3B82F6',
        fontWeight: '400',
        textDecoration: 'underline'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'space-evenly',
        position: 'sticky',
        width: '100%',
        maxWidth: '100vw',
        height: '3rem',
        backgroundColor: '#2a3239',
        color: 'white',
        fontWeight: '400',
        fontSize: '0.8rem',
        color: '#9198a1',
    },
    
};
