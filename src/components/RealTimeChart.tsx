import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Configure default chart colors for dark theme
ChartJS.defaults.color = '#94a3b8';
ChartJS.defaults.font.family = 'Inter, system-ui, sans-serif';

interface RealTimeChartProps {
  onCurrentUpdate: (current: number, power: number) => void;
}

const RealTimeChart = ({ onCurrentUpdate }: RealTimeChartProps) => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Arus Listrik (A)',
        data: [] as number[],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#1e3a8a',
        pointBorderWidth: 2,
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Daya Listrik (W)',
        data: [] as number[],
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: '#a855f7',
        pointBorderColor: '#581c87',
        pointBorderWidth: 2,
        tension: 0.4,
        fill: false,
      },
    ],
  });

  const MAX_POINTS = 15;

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });

      // Simulate real-time data
      const current = parseFloat((Math.random() * (1.8 - 0.2) + 0.2).toFixed(2));
      const voltage = 220;
      const powerFactor = 0.9;
      const power = parseFloat((current * voltage * powerFactor).toFixed(1));

      onCurrentUpdate(current, power);

      setChartData((prevData) => {
        const newLabels = [...prevData.labels, timestamp];
        const newCurrentData = [...prevData.datasets[0].data, current];
        const newPowerData = [...prevData.datasets[1].data, power];

        if (newLabels.length > MAX_POINTS) {
          newLabels.shift();
          newCurrentData.shift();
          newPowerData.shift();
        }

        return {
          labels: newLabels,
          datasets: [
            { ...prevData.datasets[0], data: newCurrentData },
            { ...prevData.datasets[1], data: newPowerData },
          ],
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [onCurrentUpdate]);

  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: false, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#e2e8f0',
          font: { size: 14, weight: 'bold' },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: '#cbd5e1',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(148, 163, 184, 0.1)', lineWidth: 1 },
        ticks: { 
          color: '#94a3b8',
          maxRotation: 45,
          minRotation: 45,
        },
        title: {
          display: true,
          text: 'Waktu',
          color: '#e2e8f0',
          font: { size: 14, weight: 'bold' },
        },
      },
      y: {
        grid: { color: 'rgba(148, 163, 184, 0.1)', lineWidth: 1 },
        ticks: { color: '#94a3b8' },
        title: {
          display: true,
          text: 'Nilai',
          color: '#e2e8f0',
          font: { size: 14, weight: 'bold' },
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return (
    <div className="h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RealTimeChart;
