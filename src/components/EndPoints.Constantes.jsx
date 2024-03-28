export const END_POINTS = {
  NODE_ENV: "production",
  PROD: "https://codereats-backend-1.onrender.com",
  DEV: "http://localhost:8080",
  URL: function () {
    return END_POINTS.NODE_ENV === "production"
      ? END_POINTS.PROD
      : END_POINTS.DEV;
  },
};
