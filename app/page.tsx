import DekstopHomePage from '@/components/DekstopHomepage';
import MobileHomePage from '@/components/MobileHomepage';

const HomePage = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <DekstopHomePage></DekstopHomePage>
      </div>
      <div className="lg:hidden">
        <MobileHomePage></MobileHomePage>
      </div>
    </div>
  );
};
export default HomePage;
