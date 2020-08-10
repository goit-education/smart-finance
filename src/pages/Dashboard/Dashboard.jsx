import React from 'react';
import Main from '../../components/Main/Main';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import DashboardPanel from '../../components/DashboardPanel/DashboardPanel';

const Dashboard = () => {
  return (
    <Main>
      <DashboardMenu />
      <DashboardPanel />
    </Main>
  );
};

export default Dashboard;
