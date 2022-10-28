import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useRole from '../hooks/useRole';
import NotAuthorized from '../pages/NotAuthorized/NotAuthorized';
import { Footer } from '../shared/Footer/Footer';
import { NavigationBar } from '../shared/NavigationBar/NavigationBar';

const RouteAthenication = (ChildComponent, givenRole) => function HOC() {
    const [userInfo, loading] = useAuthState(auth);
    const currentRole = useRole(userInfo?.email);
    if (loading || (currentRole === null)) return
    return (
        <>
            {
                currentRole !== null ? currentRole === givenRole ? <>
                    <NavigationBar isHome={true} />
                    <ChildComponent />
                    <Footer />
                </> : <NotAuthorized /> : <p>Loading</p>
            }
        </>
    );
};

export default RouteAthenication;