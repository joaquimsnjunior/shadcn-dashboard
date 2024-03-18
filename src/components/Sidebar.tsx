'use client';

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./ui/UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";



export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items:  [
        {
          link: "/",
          text: "Profile"  
        },
        {
          link: "/",
          text: "Inbox"  
        },
        {
          link: "/",
          text: "Billing"  
        },
        {
          link: "/",
          text: "Logs"  
        },
        {
          link: "/",
          text: "Nofications"  
        },
      ]
    },
    {
      group: "Settings",
      items:  [
        {
          link: "/",
          text: "General Settings"  
        },
        {
          link: "/",
          text: "Privacy"  
        },
      ]
    }
  ]


  return <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
    <div>
      <UserItem />
    </div>
    <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => ( 
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => <CommandItem key=
                {optionKey}>{option.text}</CommandItem>)}
            </CommandGroup>
            ))}
          </CommandList>
        </Command>
      Menu</div>
    <div>Settings / Nofications</div>
  </div>;
}