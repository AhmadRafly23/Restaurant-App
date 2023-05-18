import Alert from '../components/Alert';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <>
      <Alert />
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default Layout;
