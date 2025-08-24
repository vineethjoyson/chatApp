export async function registerUser({ username, password, emailId }) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, emailId }),
    });
    const data = await response.json();
    console.log(response);
    return { ok: response.ok, data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

export async function loginUser({ emailId, password }) {
  try {
    const response = await fetch("http://192.168.18.189:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailId, password }),
    });
    console.log(response);
    const data = await response.json();
    return { ok: response.ok, data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

// Helper to get token from cookies
function getTokenFromCookie() {
  const match = document.cookie.match(/(?:^|; )token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export async function fetchProfileData({ emailId }) {
  try {
    console.log("emailId", emailId);
    const token = getTokenFromCookie();
    const response = await fetch(
      "http://192.168.18.189:3000/api/protected/data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ emailId }),
      }
    );
    const data = await response.json();
    console.log("data", data);
    return { ok: response.ok, data };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
