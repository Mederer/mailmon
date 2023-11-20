import SplashScreen from "./components/screens/SplashScreen.tsx";
import {Route, Routes} from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen.tsx";
import MailDetailsScreen from "./components/screens/MailDetailsScreen.tsx";
import MailScreen from "./components/screens/MailScreen.tsx";
import NotFoundScreen from "./components/screens/NotFoundScreen.tsx";
import Layout from "./components/uishell/Layout.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<SplashScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/mail" element={<MailScreen />} />
                <Route path="/mail/:id" element={<MailDetailsScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
