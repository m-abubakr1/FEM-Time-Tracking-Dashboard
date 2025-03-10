// Function to fetch data and update UI
async function updateActivityData(timeframe = "weekly") {
  try {
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

        // Update content
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

    // Update active button class
    updateActiveButton(timeframe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to handle the active class toggle
function updateActiveButton(selectedTimeframe) {
  document.querySelectorAll(".activity-tracker__option").forEach((button) => {
    if (button.dataset.timeframe === selectedTimeframe) {
      button.classList.add("active"); 
    } else {
      button.classList.remove("active"); 
    }
  });
}

document.querySelectorAll(".activity-tracker__option").forEach((button) => {
  button.addEventListener("click", () => {
    updateActivityData(button.dataset.timeframe);
  });
});

// Initial call to set default timeframe (weekly)
updateActivityData();
