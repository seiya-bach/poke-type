import { ComponentMeta } from '@storybook/react';
import AppLogo from './index';

export default { title: 'Atoms/Logo' } as ComponentMeta<typeof AppLogo>;
export const Logo = () => <AppLogo />;
