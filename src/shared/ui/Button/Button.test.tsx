import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('button rendered', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button has clear class when theme = clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    test('button has custom class from className', () => {
        render(<Button theme={ButtonTheme.CLEAR} className="testClass">TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear', 'testClass');
    });
});
