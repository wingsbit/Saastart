import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
      <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
      <Link to="/signup" style={{ margin: '0 10px' }}>Signup</Link>
    </nav>
  );
};

export default Navbar;
