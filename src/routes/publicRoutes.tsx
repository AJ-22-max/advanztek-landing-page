import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../layout/defaultLayout';
import HomePage from '../pages/HomePage';

function PublicRoutes() {
    const location = useLocation();

    const pathsWithoutFooter = ['/placeorder', '/rider-review'];
    const hideFooter = pathsWithoutFooter.includes(location.pathname);

    return (
        <Layout hideFooter={hideFooter}>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Layout>

    );
}

export default PublicRoutes;