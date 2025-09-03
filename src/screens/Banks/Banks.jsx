import React from 'react';
import Header from '../../components/layout/Header';
import UserProfile from '../../components/layout/UserProfile';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/sections/Footer';
import BanksTags from './sections/BanksTags';
import BanksSlider from './sections/BanksSlider';
import BanksMainContent from './sections/BanksMainContent';
import MostReadSection from './sections/MostReadSection';
import Sidebar from '../../components/sections/Sidebar';

const Banks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <UserProfile />
      <Navbar />
      
      {/* Tags Section */}
      <BanksTags />
      
      {/* Main Layout: 2/3 and 1/3 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2">
            {/* Slider Section */}
            <BanksSlider />
            
            {/* Banks Articles */}
            <BanksMainContent />
          </div>
          
          {/* Sidebar - 1/3 */}
          <div className="lg:col-span-1">
            {/* Most Read Section */}
            <MostReadSection />
            
            {/* Existing Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Banks;