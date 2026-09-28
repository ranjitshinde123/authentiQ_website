import React from 'react';
import { Dumbbell, Zap, BatteryCharging } from 'lucide-react';

interface ShopByGoalProps {
  onSelectGoal: (goal: 'muscle' | 'energy' | 'recovery') => void;
}

export const ShopByGoal: React.FC<ShopByGoalProps> = ({ onSelectGoal }) => {
  return (
    <section id="goals" style={{ borderTop: '1px solid var(--border)', paddingBottom: '4rem' }}>
      <div className="section-header">
        <span className="section-tag">Performance Target</span>
        <h2 className="section-title">Shop by Training Goal</h2>
      </div>

      <div className="goals-grid">
        <div
          className="goal-card"
          onClick={() => onSelectGoal('muscle')}
          style={{
            background: `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop')`
          }}
        >
          <div className="goal-card-content">
            <Dumbbell className="goal-icon" />
            <h3>Build Muscle</h3>
            <p>Whey Protein & Creatine</p>
          </div>
        </div>

        <div
          className="goal-card"
          onClick={() => onSelectGoal('energy')}
          style={{
            background: `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop')`
          }}
        >
          <div className="goal-card-content">
            <Zap className="goal-icon" />
            <h3>Boost Energy</h3>
            <p>Explosive Pre-Workout</p>
          </div>
        </div>

        <div
          className="goal-card"
          onClick={() => onSelectGoal('recovery')}
          style={{
            background: `linear-gradient(rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop')`
          }}
        >
          <div className="goal-card-content">
            <BatteryCharging className="goal-icon" />
            <h3>Improve Recovery</h3>
            <p>ZMA Sleep & BCAA Repair</p>
          </div>
        </div>
      </div>
    </section>
  );
};
