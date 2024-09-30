import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownIcon,
  ChevronDown,
  GiftIcon,
  ListIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface userLink {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const userLinks: userLink[] = [
  { title: "My Profile", icon: <UserIcon size={20} />, link: "/profile" },
  { title: "Wallet", icon: <WalletIcon size={20} />, link: "/wallet" },
  { title: "Withdraw", icon: <ArrowDownIcon size={20} />, link: "" },
  { title: "Transactions", icon: <ListIcon size={20} />, link: "" },
  { title: "Refer & Earn", icon: <GiftIcon size={20} />, link: "" },
  { title: "Settings", icon: <SettingsIcon size={20} />, link: "" },
  { title: "Logout", icon: <LogOutIcon size={20} />, link: "" },
];

const UserActions = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden lg:flex items-center text-sm outline-none relative group">
        <div className="flex items-center gap-x-2 mr-1">
          <div className="w-8 h-8 bg-muted rounded-full"></div>
          <span>EUR 300.4</span>
        </div>
        <ChevronDown
          size={16}
          className="text-gray-600 group-hover:text-foreground"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0 sm:right-4 md:-right-16 mt-2 w-fit bg-background border-muted p-3 hidden lg:flex flex-col items-start justify-center">
        {userLinks.map((link, index) => (
          <DropdownMenuItem
            key={index}
            className="w-full cursor-pointer focus:bg-background text-muted focus:text-white"
            onClick={() => {
              router.push(link.link);
            }}
          >
            <div className="flex items-center">
              {link.icon}
              <span className="ml-2 text-xs">{link.title}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActions;
