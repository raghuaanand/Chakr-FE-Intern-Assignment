import AppearanceForm from "@/components/ApperanceForm";
import SettingsSidebar from "@/components/SettingsSidebar";

const apperancePage = () =>  {
    return (
        <div className="bg-[#f5f3f3d5]">
            <div className=" flex ml-[20%]">
                <SettingsSidebar />
                <AppearanceForm/>
            </div>
        </div>
    )
}

export default apperancePage;