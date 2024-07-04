import Sidebar from "@/components/Sidebar";
import TodoApp from "@/components/Todo"

 const Tasks = () => {
    return(
        <div className="flex bg-[#f5f3f3d5]">
            <Sidebar />
            <div className="bg-white rounded-md border-[1px] w-[85%]  mt-16  py-10">
                <TodoApp />
            </div>
        </div>
    )
}

export default Tasks;