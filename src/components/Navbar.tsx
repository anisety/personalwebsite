import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href || location.hash === href.split('#')[1];
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar-base ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
    >
      <div className="navbar-container-new">
        <div className="navbar-content-new">
          {/* Logo */}
          <Link to="/" className="navbar-logo-link">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="navbar-logo-text"
            >
              AB
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-menu">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleScrollToSection(item.href.substring(2))}
                  className={`navbar-desktop-item ${isActive(item.href) ? 'navbar-desktop-item-active' : 'navbar-desktop-item-inactive'}`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="navbar-desktop-active-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`navbar-desktop-item ${isActive(item.href) ? 'navbar-desktop-item-active' : 'navbar-desktop-item-inactive'}`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="navbar-desktop-active-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-button-wrapper">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-toggle-button"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile-menu"
          >
            <div className="navbar-mobile-menu-items">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`navbar-mobile-item ${isActive(item.href)
                    ? 'navbar-mobile-item-active'
                    : 'navbar-mobile-item-inactive'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
