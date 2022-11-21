import { NotificationButton } from './components/NotificationButton/NotificationButton';
import { Header } from './components/Header/Header';
// import {Footer} from './components/Footer/Footer';
import { SalesCard } from './components/SalesCard/SalesCard';
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
export const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div>
            <SalesCard />

          </div>
        </section>
      </main>

    </>);
}


