import { NotificationButton } from './components/NotificationButton/NotificationButton';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {SalesCard} from './components/SalesCard/SalesCard';
import "./index.css";
export const App =()=> {
  return (
    <div>
      <Header />

      
      <main>
        <section id="sales">
          <div>
            <SalesCard />
            
          </div>
        </section>
      </main>

    </div>);
}


