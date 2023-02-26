import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('loginForm');

    const submitHandler = () => {
        console.log('submit');
    };
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Логин', { ns: 'loginForm' })}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Пароль', { ns: 'loginForm' })}
            />
            <Button
                onClick={submitHandler}
                className={cls.loginBtn}
            >
                {t('Войти', { ns: 'loginForm' })}
            </Button>
        </div>
    );
};
