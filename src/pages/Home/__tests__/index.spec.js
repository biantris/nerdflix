import { render } from '@testing-library/react';

import Home from "./../index";

it('should render Most Popular', async () => {
  const { getByText, debug } = render(<Home />)

  //debug()

  expect(getByText('Password changed successfully')).toBeTruthy();
})