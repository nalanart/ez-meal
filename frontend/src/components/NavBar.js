import './NavBar.css'

export default function NavBar({ isLoggedIn, logout }) {

  return isLoggedIn === 'false' ? (
    <nav className="nav">
      <div className="links">
        <a id="logo" className="nav-link" href="/"><b>E Z M E A L</b></a>
        <a className="nav-link" href="/recipes">ON THE MENU</a>
        <a className="nav-link" href="/pricing">PRICING</a>
      </div>
      <div className="login-signup">
        <a href="/login" className="nav-link">Log in</a>
        <a href="/register" className="nav-link signup">Sign up</a>
      </div>
    </nav>
  ) : (
    <nav className="nav">
      <div className="links">
        <a id="logo" className="nav-link" href="/"><b>E Z M E A L</b></a>
        <a className="nav-link" href="/recipes">ON THE MENU</a>
        <a className="nav-link" href="/pricing">PRICING</a>
      </div>
      <div className="cart-logout">
        <a className="nav-link" href="/checkout">Checkout</a>
        <a className="nav-link" href="/" onClick={logout}>Log out</a>
      </div>
    </nav>
  )
}