import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Home() {
    return (
        <div className=" w-full h-screen bg-background text-primary flex justify-end items-start p-4">
        
            <ModeToggle />
        </div>
    )
}