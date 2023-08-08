import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
/*import style from './BasicLayout.module.css';*/

export function BasicLayout () {
    return (
        <>
           <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}