import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { GiCat } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuLink = ({ children, href, active }) => {
    return (
        <div className="relative flex py-2">
            <NavigationMenu.Item
                asChild
                className="rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-black/50"
            >
                <NavigationMenu.Link
                    active={active}
                    href={href}
                    className={`px-2 py-2  ${active && 'font-bold'}`}
                >
                    {children}
                    {active && (
                        <div className="absolute left-0 bottom-0 h-[2px] w-full bg-green-500"></div>
                    )}
                </NavigationMenu.Link>
            </NavigationMenu.Item>


        </div>
    )
}



const Navbar = ({ title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <Link to="/">
                    <GiCat /> {title}
                </Link>
            </h1>
            <NavigationMenu.Root>
                <NavigationMenu.List className="flex space-x-2">
                    <MenuLink href="/" active>
                        Live
                    </MenuLink>
                    <MenuLink href="https://electricitymaps.com/open-source/?utm_source=app.electricitymaps.com&utm_medium=referral">
                        Open Source
                    </MenuLink>
                    <MenuLink href="https://electricitymaps.com/blog/?utm_source=app.electricitymaps.com&utm_medium=referral">
                        Blog
                    </MenuLink>
                    <MenuLink href="https://electricitymaps.com?utm_source=app.electricitymaps.com&utm_medium=referral">
                        Data
                    </MenuLink>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </nav>
    );
};

Navbar.defaultProps = {
    title: "Amber Data"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar;