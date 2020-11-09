import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ active, Icon, title }) => {
  return (
    <div className={`sidebarRow ${active && 'active'}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  )
}

export default SidebarRow;
