import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

import Home from "./../index";

it('should render home page', () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe("Games");
});