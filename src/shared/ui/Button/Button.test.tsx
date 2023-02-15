import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('button rendered', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button has clear class when theme = clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    test('button has custom class from className', () => {
        render(<Button theme={ThemeButton.CLEAR} className="testClass">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear', 'testClass');
    });
});
