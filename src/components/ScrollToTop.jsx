import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/40 hover:scale-110 active:scale-95 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <FiArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;
