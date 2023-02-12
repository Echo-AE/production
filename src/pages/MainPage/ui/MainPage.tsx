import React from 'react'
import {useTranslation} from "react-i18next";

type Props = {}

export const MainPage = (props: Props) => {

  const {t} = useTranslation('mainpage');

  return (
    <div>{t('Главная страница')}</div>
  )
}
