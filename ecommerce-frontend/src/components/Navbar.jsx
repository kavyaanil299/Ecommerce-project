import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function Navbar() {
  const cart = useSelector(state => state.cart.cartItems);
  const { user, token } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">Ecommerce</Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cart.length})
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            {/* 🔥 LOGIN / LOGOUT FIX */}
            {token ? (
              <li className="nav-item">
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;