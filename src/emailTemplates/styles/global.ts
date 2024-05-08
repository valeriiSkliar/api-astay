export const nulling: React.CSSProperties = {
  margin: 0,
  padding: 0,
  lineHeight: "normal",
};

export const textAccent: React.CSSProperties = {
  color: "inherit",
  fontWeight: 500,
  textDecoration: "underline",
};

export const heading = {
  marginBottom: "0",
  fontSize: "32px",
  fontWeight: "700",
};

export const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
};

export const mainImg: Style = {
  ...nulling,
  objectFit: "contain",
  width: "100%",
  height: "100%",
  borderRadius: 20,
};

export const hr = {
  borderColor: "#cccccc",
};

export const button: Style = {
  margin: "0 auto",
  padding: "15px 50px",
  background: "#3e3790",
  color: "#fff",
  fontWeight: 900,
  textTransform: "uppercase",
  borderRadius: 15,
};
