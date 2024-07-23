import StatisticsChart from "./StatisticsChart";
import "./Stylings/Statistics.css";

const Statistics = () => {
  // Retrieve stored practice stats from localStorage or set to an empty array if not found
  let data = JSON.parse(localStorage.getItem("practice-stats")) || [];

  // Initialize variables to calculate averages
  let count, totalWpm, totalTime, totalMistake;
  count = totalWpm = totalTime = totalMistake = 0;

  // Calculate total values for wpm, time, and mistakes from the data
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      totalWpm += parseFloat(data[key].wpm);
      totalTime += parseFloat(data[key].time);
      totalMistake += parseFloat(data[key].mistakes);
      count += 1; // Increment count for each entry
    }
  }

  // Calculate averages and provide a method to get a description based on the average WPM
  const averages = {
    avgWpm: (totalWpm / count).toFixed(1),
    avgTime: (totalTime / count).toFixed(1),
    avgMistake: (totalMistake / count).toFixed(1),
    description: "",

    // Function to determine descriptive text based on average WPM
    calculateWpmDescription: function () {
      const wpm = Math.round(this.avgWpm);
      switch (true) {
        case wpm <= 19:
          return `You type around one word every 6 seconds. Learn the proper typing technique and practice to improve your speed!`;
        // Add further cases as needed
        default:
          return `You are in the top 1% of typists! Congratulations`;
      }
    },
  };

  // Set the descriptive text for display
  averages.description = averages.calculateWpmDescription();

  // Sort the data by ID in descending order for display
  data.sort((a, b) => b.id - a.id);

  return (
    <section className="statistics">
      {/* Display statistics if data is available */}
      {localStorage.getItem("practice-stats") ? (
        <>
          {/* Display average statistics */}
          <section className="average-container">
            <section className="average-stats">
              <section className="average average-wpm">
                <span className="wpm-title">Average wpm</span>
                <span>{averages.avgWpm}</span>
              </section>
              <section className="average">
                <span>{averages.avgTime}s</span>
                <span className="mistakes">{averages.avgMistake}</span>
              </section>
              <p className="description">{averages.description}</p>
            </section>
          </section>
          {/* Render the statistics chart with dataset configuration */}
          <StatisticsChart
            dataset={[
              { data: "wpm", color: "#0c7c59" },
              { data: "mistakes", color: "#d64933" },
            ]}
          />
        </>
      ) : (
        <p>No statistics to be shown! Practice at least once!</p>
      )}

      {/* Display a table of individual practice sessions */}
      <table className="statistics-list">
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="statistics-item">
              <th className="date">{item.date}</th>
              <th className="wpm">{item.wpm}wpm</th>
              <th className="time">{item.time}s</th>
              <th className="mistakes">
                {item.mistakes}
                {"\u00A0"}
                <span>mistakes</span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Statistics;
