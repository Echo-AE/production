import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { I18nDecorator } from '../../../shared/config/storybook/I18nDecorator/I18nDecorator';

export default {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Common = Template.bind({});
Common.args = {};

export const CommonDark = Template.bind({});
CommonDark.args = {};
CommonDark.decorators = [I18nDecorator, ThemeDecorator(Theme.DARK)];
