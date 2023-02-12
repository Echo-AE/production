import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar className="a" />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
