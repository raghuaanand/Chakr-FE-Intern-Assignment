import { Payment, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      name: 100,
      company: "pending",
      email: "m@example.com",
      phone: "",
      creationDate: "",
      city: "",
      jobTitle: "",
      LinkedIn: "",
      x: ""

    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container absolute ml-[10%] mt-5 top-0 py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
