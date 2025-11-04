export const styles = {
    container: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0D1117',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
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
        fontWeight: '500',
        color: '#F0F6FC',
        fontSize: '1rem',
        lineHeight: '30px',
    },
    wrapper: {
        width: '100%',
        maxWidth: '28rem'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1.5rem'
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
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: '2rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '1.5rem'
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#d1d5db',
        marginBottom: '0.5rem'
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
        width: '28rem',
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
        fontWeight: '600',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontSize: '1rem'
    },
    signInButtonHover: {
        background: '##3bab07',
        transform: 'scale(1.02)'
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
        backgroundColor: 'white',
        color: '#111827',
        fontWeight: '600',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #d1d5db',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        fontSize: '1rem'
    },
    googleButtonHover: {
        backgroundColor: '#f3f4f6'
    },
    googleIcon: {
        width: '1.25rem',
        height: '1.25rem'
    },
    appleButton: {
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '600',
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #1f2937',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        fontSize: '1rem'
    },
    appleButtonHover: {
        backgroundColor: '#111827'
    },
    appleIcon: {
        width: '1.25rem',
        height: '1.25rem'
    }
};
