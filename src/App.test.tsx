import React from "react"
import { queryByAttribute, screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"
import fetchMock from 'fetch-mock';

const getById = queryByAttribute.bind(null, "id");

const mockUrlApi = () => {
  let urlDeferred;
  const urlPromise = new Promise((resolve, reject) => {
    urlDeferred = { reject, resolve };
  });

  fetchMock.getOnce("https://api.example.com/items", urlPromise, { overwriteRoutes: false });
  return urlDeferred;
};

test("renders learn react link", () => {
  render(<App />)
  // const linkElement = screen.getByText(/Abuja/i)
  // expect(linkElement).toBeInTheDocument()
})
