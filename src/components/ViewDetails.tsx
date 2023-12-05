import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import { PiNotepadDuotone } from "react-icons/pi";
import { LuCopy } from "react-icons/lu";
import { AiTwotoneCreditCard } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";



const ViewDetails = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
        isIconOnly 
          variant="light" 
        >
            <BsThreeDotsVertical  size={'20px'} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem
          key="new"
          shortcut="⌘N"
          description="Create a new file"
          startContent={<PiNotepadDuotone className={iconClasses} />}
        >
          New file
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          description="Copy the file link"
          startContent={<LuCopy className={iconClasses} />}
        >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          showDivider
          description="Allows you to edit the file"
          startContent={<AiTwotoneCreditCard className={iconClasses} />}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
          description="Permanently delete the file"
          startContent={<AiTwotoneDelete className={cn(iconClasses, "text-danger")} />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ViewDetails