import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/themeProvider";
import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";

type Props = {}

export const App = (props: Props) => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar className={'a'}/>
        <AppRouter />
    </div>
  )
}