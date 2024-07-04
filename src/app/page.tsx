import Sidebar from "@/components/Sidebar";
import { People, columns } from "@/components/column";
import { DataTable } from "@/components/data-table";
import Image from "next/image";


async function getData(): Promise<People[]> {
  // Fetch data from your API here.
  return [
    
    {
      id: "728ed52f",
      name: "Raghu Anand",
      company: "Chakr",
      email: "raghuaanand@gmail.com",
      phone: 7762091121,
      creationDate: "3rd July 2024",
      city: "Samastipur",
      jobTitle: "Frontend Intern",
      linkedin: "https://linked.in/raghuaanand",
      x: "https://x.com/raghuaanand"
    },
    // ...
  ]
}

export default async function Home() {
  const data = await getData()
  return (
    <div className="flex bg-[#f5f3f3d5]">
      <Sidebar />
      <div className="container bg-white rounded-md border-[1px] w-auto mt-5  py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
