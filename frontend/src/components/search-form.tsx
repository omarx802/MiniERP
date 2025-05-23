"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Label } from "@/src/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/src/components/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <form {...props}>
      <SidebarGroup className="py-1">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-8"
            aria-label="Search modules"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
