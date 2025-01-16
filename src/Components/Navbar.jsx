import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/dashboard/users">Users</Link></li>
        <li><Link to="/dashboard/advertisements">Advertisements</Link></li>
        <li><Link to="/dashboard/news">News</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
