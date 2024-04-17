/* eslint-disable react/prop-types */

export default function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{ height: "2rem", width: "320px", padding: "0 8px" }}
    />
  );
}
