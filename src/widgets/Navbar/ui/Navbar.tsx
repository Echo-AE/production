import React from 'react';
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const { toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to ={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to ={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};