import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Routers from '../../routers/Routers'

export default function Layout() {
  return (
    <>
      <Header />
      <Routers/>
      <Footer />
    </>
  );
}
