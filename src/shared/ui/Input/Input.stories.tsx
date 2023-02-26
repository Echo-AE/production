import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/themeProvider';
import { Input } from './Input';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Common = Template.bind({});
Common.args = {
    placeholder: 'Placeholder',
    value: 'Value',
};

export const CommonDark = Template.bind({});
CommonDark.args = {};
CommonDark.decorators = [ThemeDecorator(Theme.DARK)];
