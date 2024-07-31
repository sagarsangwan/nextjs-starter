
import { auth } from '@/lib/auth'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { SignIn } from '../ui/signin-button'
import { SignOut } from '../ui/signout-button'
async function UserAvatar() {
    const session = await auth()
    return (
        <div>
            {session ?
                (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>

                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <SignOut />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <SignIn />
                )}
        </div>
    )
}

export default UserAvatar
