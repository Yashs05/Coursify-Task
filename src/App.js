import './App.css';
import Companies from './Components/Companies/Companies';
import Footer from './Components/Footer/Footer';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Navbar from './Components/Navbar/Navbar';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className='app-main'>
        <h2 className='text-white fw-bold text-center mb-4'>Tired of hiring skillful talents or finding jobs?</h2>
        <h4 className='text-white text-center mb-5'>Worry not. Coursify is your ultimate stop. Hire talnted people with ease and make your business grow rapidly or get hired by top companies in the blink of an eye.</h4>

        <div className="d-flex justify-content-center" style={{ gap: 20 }}>
          <button className="hire-btn" type="button">Hire people</button>
          <button className="find-jobs-btn" type="button">Find jobs</button>
        </div>
      </main>

      <HowItWorks />

      <Companies />

      <Testimonials />

      <section className='text-center'>
        <h3 className='fw-bold color-main text-center'>Ready to dive into world of Coursify?</h3>
        <h4 className='fw-bold color-secondary text-center'>We ensure perfect opportunities for both recruiters and seekers.</h4>
        <button className='px-4 py-3 bg-secondary text-white mt-4 mb-5 start-btn fw-bold' style={{ borderRadius: 40, border: '3px solid var(--secondary)' }}>Let's get started</button>
      </section>

      <Footer />

    </div>
  );
}

export default App;
