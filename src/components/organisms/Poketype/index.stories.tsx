import { ComponentMeta } from '@storybook/react';
import Poketype from './index';

export default {
    title: 'Organisms/Poketype',
} as ComponentMeta<typeof Poketype>;

export const Normal = () => <Poketype />;
