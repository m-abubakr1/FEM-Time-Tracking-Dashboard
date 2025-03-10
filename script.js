// Function to fetch data and update UI
async function updateActivityData(timeframe = "weekly") {
  try {
    // Fetch the JSON data
    const response = await fetch("data.json");
    const data = await response.json();

    // Loop through each activity in the JSON
    data.forEach((activity) => {
      const activityClass = activity.title.toLowerCase().replace(" ", "-"); // Convert to lowercase and replace spaces
      const activitySection = document.querySelector(
        `.activity-tracker__activity.${activityClass}`
      );

      if (activitySection) {
        const currentTimeframe = activitySection.querySelector(
          ".activity__current-timeframe"
        );
        const timeWindow = activitySection.querySelector(".time-window");
        const time = activitySection.querySelector(".time");

        // Update content with fetched data
        if (currentTimeframe)
          currentTimeframe.textContent = `${activity.timeframes[timeframe].current}hrs`;
        if (timeWindow)
          timeWindow.textContent = `Last ${
            timeframe.charAt(0).toUpperCase() + timeframe.slice(1)
          }`;
        if (time)
          time.textContent = `${activity.timeframes[timeframe].previous}hrs`;
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example: Call function to update UI for the default 'weekly' timeframe
updateActivityData();

// Event listener for changing the timeframe dynamically
document.querySelectorAll(".activity-tracker__option").forEach((button) => {
  button.addEventListener("click", () => {
    updateActivityData(button.dataset.timeframe);
  });
});

