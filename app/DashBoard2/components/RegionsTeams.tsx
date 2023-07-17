




"use client"

import {
    CaretSortIcon,
    CheckIcon,
    PlusCircledIcon,
} from "@radix-ui/react-icons"
import * as React from "react"

import { EnumRegions, regionsArray } from "@/app/ReportTables/components/TableSettlemets"
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {
    Dialog,
    DialogTrigger
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import Link from "next/link"


const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
]

type Team = (typeof groups)[number]["teams"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function RegionsTeams({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
  const [selectedTeam, setSelectedTeam] = React.useState<EnumRegions>()
  const setRegion=useRegionStore(state=>state.setRegions)

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="w-5 h-5 mr-2">
              <AvatarImage
                src={"/avatars/04.png"}
                alt={selectedTeam}
              />
              <AvatarFallback> Teams</AvatarFallback>
            </Avatar>
            {selectedTeam}
            <CaretSortIcon className="w-4 h-4 ml-auto opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search team..." />
              <CommandEmpty>No team found.</CommandEmpty>
              
                <CommandGroup  heading="Teams">
                  {regionsArray.map((team,key) => (
                    <CommandItem
                      key={key}
                      onSelect={() => {
                        setSelectedTeam(team)
                        setRegion(team)
                        setOpen(false)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="w-5 h-5 mr-2">
                        <AvatarImage
                          src={`/avatars/05.png`}
                          alt={team}
                          className="grayscale"
                        />
                        <AvatarFallback>Regions</AvatarFallback>
                      </Avatar>
                      {team}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedTeam === team
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
             
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewTeamDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="w-5 h-5 mr-2" />
                    <Link href={"/Admin"}>CreateRegion</Link>
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
     
    </Dialog>
  )
}