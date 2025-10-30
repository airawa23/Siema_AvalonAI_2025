import { Card } from '@/components/ui/card';

interface StatusCardsProps {
  currentValue: number;
}

const StatusCards = ({ currentValue }: StatusCardsProps) => {
  const getStatusColor = () => {
    if (currentValue > 1.5) return 'danger';
    if (currentValue > 1.0) return 'warning';
    return 'normal';
  };

  const statusColor = getStatusColor();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* Current Status Card */}
      <Card 
        className={`p-6 rounded-xl shadow-lg border-0 transition-all duration-300 ${
          statusColor === 'danger' 
            ? 'bg-gradient-to-br from-red-500 to-red-600' 
            : statusColor === 'warning'
            ? 'bg-gradient-to-br from-amber-400 to-amber-500'
            : 'bg-gradient-to-br from-blue-500 to-blue-600'
        }`}
      >
        <div className="text-center text-white">
          <p className="text-sm font-semibold opacity-90">Arus Listrik Saat Ini (A)</p>
          <p className="text-4xl font-bold mt-2">{currentValue.toFixed(2)} A</p>
          <p className="text-xs mt-2 italic">
            {statusColor === 'danger' ? 'DANGER !' : statusColor === 'warning' ? 'Warning !' : 'Normal'}
          </p>
        </div>
      </Card>

      {/* Normal Status Card */}
      <Card className="p-6 rounded-xl shadow-lg border-0 bg-gradient-to-br from-blue-500 to-blue-600">
        <div className="text-center text-white">
          <p className="text-sm font-semibold opacity-90">Batas Normal (&lt; 1.0 A)</p>
          <p className="text-4xl font-bold mt-2">OK</p>
        </div>
      </Card>

      {/* Warning Status Card */}
      <Card className="p-6 rounded-xl shadow-lg border-0 bg-gradient-to-br from-amber-400 to-amber-500">
        <div className="text-center text-white">
          <p className="text-sm font-semibold opacity-90">Batas Warning (1.0 - 1.5 A)</p>
          <p className="text-4xl font-bold mt-2">Waspada</p>
        </div>
      </Card>

      {/* Danger Status Card */}
      <Card className="p-6 rounded-xl shadow-lg border-0 bg-gradient-to-br from-red-500 to-red-600">
        <div className="text-center text-white">
          <p className="text-sm font-semibold opacity-90">Batas Danger (&gt; 1.5 A)</p>
          <p className="text-4xl font-bold mt-2">Bahaya</p>
        </div>
      </Card>
    </div>
  );
};

export default StatusCards;
