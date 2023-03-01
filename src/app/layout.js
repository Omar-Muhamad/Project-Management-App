import './globals.css';

export const metadata = {
  title: 'Project Management App',
  description: 'Here you can manage your projects',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
