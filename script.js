let dataStore = [];

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response was not ok!");
    } else return response.json();
  })
  .then((data) => {
    dataStore = data;
    console.log(dataStore);
  })
  .catch((error) => {
    console.error("Error Fetching data: ", error);
  });

// async function fetchData() {
//   try {
//     let response = await fetch("/data.json");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchData();
