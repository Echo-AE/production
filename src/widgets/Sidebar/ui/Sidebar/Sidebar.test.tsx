import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar rendered', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapse', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('Sidebar undo collapse', () => {
        componentRender(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
