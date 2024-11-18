import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the required elements with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieCharts() {
  const pieData = [
    {
      title: "40%",
      percentage: 40,
      color: "#FF6384",
      content: "of businesses do not reopen following a disaster.",
    },
    {
      title: "25%",
      percentage: 25,
      color: "#36A2EB",
      content: "fail within one year of a disaster.",
    },
    {
      title: "90%",
      percentage: 90,
      color: "#FFCE56",
      content: "of companies fail within two years of being struck by a disaster.",
    },
  ];

  return (
    <>
      <div className="flex justify-center mx-auto font-bold text-3xl mb-14 mt-[10rem]">
        Attack consequences on businesses
      </div>

      <div className="flex flex-wrap justify-center max-w-[50rem] mx-auto gap-8 px-4">
        {pieData.map((data, index) => (
          <div
            key={index}
            className="card bg-base-100 md:w-56 w-full max-w-lg mx-auto rounded-lg flex flex-col justify-between py-6" 
          >
            <div className="card-body items-center text-center flex-grow">
              <Pie
                data={{
                  labels: [`${data.percentage}%`],
                  datasets: [
                    {
                      data: [data.percentage, 100 - data.percentage],
                      backgroundColor: [data.color, "#E0E0E0"],
                      hoverBackgroundColor: [data.color, "#E0E0E0"],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: true,
                  responsive: true,
                  animation: {
                    duration: 500,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <header className="card-title mb-3 text-4xl mx-auto flex items-center justify-center">
              {data.title}
            </header> {/* Fixed height for title */}
            <p className="text-sm mx-auto text-center p-4 h-[5rem]">
              {data.content}
            </p> 
          </div>
        ))}
      </div>
    </>
  );
}
