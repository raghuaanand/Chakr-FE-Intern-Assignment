"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"



import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type People = {
    id: string
    name: string
    email: string
    company: string
    phone: number
    creationDate: string
    city: string
    jobTitle: string
    linkedin: string
    x: string
}

export const columns: ColumnDef<People>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "creationDate",
        header: "Creation date",
    },
    {
        accessorKey: "city",
        header: "City",
    },
    {
        accessorKey: "jobTitle",
        header: "Job Title",
    },
    {
        accessorKey: "linkedin",
        header: "LinkedIn",
    },
    {
        accessorKey: "x",
        header: "X",
    },
    
]
