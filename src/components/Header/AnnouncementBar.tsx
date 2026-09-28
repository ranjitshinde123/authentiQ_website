import React from 'react';
import { Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Truck size={14} />
        <span>Worldwide Shipping Available</span>
      </div>
    </div>
  );
};
