async function fetchHomePage() {
  let result;
  try {
    const response = await fetch("http://localhost:8000/api/v1/admin/getuser", {
      method: "GET",
      credentials: "include", // This ensures cookies are sent with the request
    });

    result = await response.json();
    if (response.ok) {
      console.log("Home Page Data:", result);
      console.log("Home Page Data:", result.data);
      return result.data;
    } else {
      console.error("Failed to load home page:", result.message);
    }
  } catch (error) {
    console.error("Error fetching home page:", error);
  }
}

async function displayData() {
  const user = await fetchHomePage();
  console.log(user);
}

displayData();
