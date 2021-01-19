import './NavBar.css'

export default function NavBar({ isLoggedIn, logout }) {

  return isLoggedIn === 'false' ? (
    <nav className="nav">
      <div className="links">
        <a className="nav-link" href="/">EZmeal</a>
        <a className="nav-link" href="/recipes">ON THE MENU</a>
        <a className="nav-link" href="/pricing">PRICING</a>
      </div>
      <div className="login-signup">
        <a href="/login" className="btn btn-outline-info nav-link">Log in</a>
        <a href="/register" className="btn btn-primary nav-link signup">Sign up</a>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <div className="links">
        <a className="nav-link" href="/">EZmeal</a>
        <a className="nav-link" href="/recipes">ON THE MENU</a>
        <a className="nav-link" href="/pricing">PRICING</a>
      </div>
      <div className="cart-logout">
        <a className="nav-link" href="/checkout"><img src="data:image/png;base64,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" height="40" alt="shopping-cart-icon" /></a>
        <a className="nav-link" href="/" onClick={logout}>Log out</a>
      </div>
    </nav>
  )
}