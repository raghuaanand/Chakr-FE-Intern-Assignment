
import SettingsSidebar from '@/components/SettingsSidebar';
import ProfileForm from '@/components/ProfileFrom';

const SettingsPage = () => {
  return (
    <div className=" bg-[#f5f3f3d5] ">
      <div className=' flex ml-[20%]'>
        <SettingsSidebar />
        <ProfileForm />
      </div>
    </div>
  );
};

export default SettingsPage;
