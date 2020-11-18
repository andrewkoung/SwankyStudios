import React, { useContext, useEffect, useState } from "react";
import { withFirebase } from "../Firebase/context";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const withAuthentication = (Component) => {
    function AuthProvider({ props, firebase }) {
        const [currentUser, setCurrentUser] = useState();
        const [loading, setLoading] = useState(true) 

        function signup(email, password) {
            return firebase.auth.createUserWithEmailAndPassword(email, password);
        }

        function login(email, password) {
            return firebase.auth.signInWithEmailAndPassword(email, password);
        } 

        function logout() {
            firebase.auth.signOut()
        }

        useEffect(() => {
            const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
                setCurrentUser(user);
                setLoading(false)
            });

            return unsubscribe;
        }, []);

        const value = {
            currentUser,
            signup,
            login,
            logout
        };
        
        return (
            <AuthContext.Provider value={value}>
                {!loading && <Component {...props} />}
            </AuthContext.Provider>
        );
    }

    return withFirebase(AuthProvider);
};

export default withAuthentication;
