/* eslint-disable react/prop-types */

export default function Box({ children }) {
  return (
    <div
      className="container"
      style={{
        justifyContent: "space-between",
        paddingLeft: "50px",
        paddingRight: "50px",
        gap: "2rem",
      }}
    >
      {children}
    </div>
  );
}
