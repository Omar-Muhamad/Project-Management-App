import '../../styles/global.css';
import GlassPane from '@/components/GlassPane';

export const metadata = {
  title: 'Dashboard',
  description: 'Here you can manage your projects',
};

const DashboardRootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <GlassPane className="w-full h-full flex justify-center items-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default DashboardRootLayout;