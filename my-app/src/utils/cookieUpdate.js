export function setTokenCookie(token, days = 7) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  let cookieStr = `token=${encodeURIComponent(
    token
  )}; path=/; expires=${expires}; SameSite=Strict`;
  if (window.location.protocol === "https:") cookieStr += "; Secure";
  document.cookie = cookieStr;
}
