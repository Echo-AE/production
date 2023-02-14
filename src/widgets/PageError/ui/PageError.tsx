import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('pageError');

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непридвиденная ошибка', { ns: 'pageError' })}</p>
            <Button className={cls.button} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
