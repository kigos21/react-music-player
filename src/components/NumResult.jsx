/* eslint-disable react/prop-types */

export default function NumResult({ musics }) {
  return (
    <p style={{ display: "flex", alignItems: "center" }}>
      <span>
        Found <strong>{musics.length}</strong> results.
      </span>
    </p>
  );
}
