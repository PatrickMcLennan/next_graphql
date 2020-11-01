import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../pages/_app';

const text = `App is running.`;

const Component = () => <App Component={() => <h1 data-testid="h1">{text}</h1>} />;

test("[<App />]:\t Doesn't crash.", () => {
  console.log(App);
  const { getByTestId } = render(Component());
  const h1 = getByTestId(`h1`);
  return expect(h1.textContent).toBe(`${text}`);
});
