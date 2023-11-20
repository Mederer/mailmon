import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";

export default function Layout() {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>
            <h1>Footer</h1>
        </footer>
    </>
}