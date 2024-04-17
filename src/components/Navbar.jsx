/* eslint-disable react/prop-types */

import Search from "./Search";
import Logo from "./Logo";

export default function Navbar({ children, query, setQuery }) {
  return (
    <nav className="container" style={{ alignItems: "center" }}>
      <Logo />
      <Search query={query} setQuery={setQuery} />
      {children}
    </nav>
  );
}
