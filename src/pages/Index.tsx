import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatusCards from '@/components/StatusCards';
import RealTimeChart from '@/components/RealTimeChart';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [powerValue, setPowerValue] = useState(0);

  const handleDataUpdate = (current: number, power: number) => {
    setCurrentValue(current);
    setPowerValue(power);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background))] to-slate-950">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-8">
            <StatusCards currentValue={currentValue} />
            
            <Card className="bg-[hsl(var(--card))]/70 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-[hsl(var(--border))]">
              <h2 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                Monitoring Arus & Daya Listrik Real-Time
              </h2>
              <RealTimeChart onCurrentUpdate={handleDataUpdate} />
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
