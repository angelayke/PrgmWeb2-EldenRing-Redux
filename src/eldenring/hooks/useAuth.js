import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const storage = localStorage;
    const key = "user";
    // on invoque  le hook useNavigate de react Router qui nous retourne une fonction
    const navigate = useNavigate();

    return () => {
        storage.setItem(key, 1);
        // On peut ensuite utiliser cette fonction pour naviguer dans notre application
        navigate('/eldenring');
    }
}

export default useAuth;