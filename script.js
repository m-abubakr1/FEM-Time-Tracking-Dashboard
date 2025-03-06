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
