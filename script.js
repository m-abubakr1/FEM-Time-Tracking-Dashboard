async function fetchData() {
  try {
    let response = await fetch("/data.json");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
