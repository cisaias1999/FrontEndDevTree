import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import LoginViews from './views/LoginViews';
import RegisterViews from './views/RegisterViews';
import AuthLayout from './layouts/AuthLayout';



export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginViews />} />
                    <Route path="/auth/register" element={<RegisterViews />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}