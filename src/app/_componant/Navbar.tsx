"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import image from "@/images/freshcart-logo.49f1b44d.svg fill.png"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"
import { CiHeart } from "react-icons/ci"
import { FaCartShopping } from "react-icons/fa6"
import { PiIdentificationCardLight } from "react-icons/pi"
import { useCart } from "../_context/usecart"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function Navbar() {

  const {numberOfCart}  = useCart()


const session =  useSession()

function handelLogout(){

  signOut({redirect :true , callbackUrl:"/"})
}


  return (
    <NavigationMenu className=" max-w-none py-2 bg-gary-50 ">
      <NavigationMenuList>




        <NavigationMenuItem className=" flex gap-4">
<div>
  <img src={image.src} alt="logo" />
</div>

<div>
    <input type="text"  className=" border-2 rounded-lg ps-5 pe-12 px-3 " placeholder=" search about your needs" />
</div>

        </NavigationMenuItem>



        <NavigationMenuItem >
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/cart">shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/catorgy">catorgy</Link>
          </NavigationMenuLink>
       </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/brands">brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/Wishlist"><CiHeart /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/"> <PiIdentificationCardLight /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent " href="/cart">
            <span className="absolute -top-1 right-1 bg-[#16A34A] rounded-full  text-white px-1 "> {numberOfCart}</span>
            <FaCartShopping /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


        {session.data? 
 <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Button className="bg-black hover:bg-black cursor-pointer" onClick={handelLogout} >Logout</Button>
          </NavigationMenuLink>
        </NavigationMenuItem> : <>

               <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent " href="/SignUp">SignUp</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


 <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className="bg-transparent hover:bg-transparent" href="/Login">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        </>
        
        }


  




      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
