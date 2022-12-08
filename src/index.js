import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from "./Test";

//ADD EXPORTS HERE
import Component from './lib/Component';
export {Component};

if (process.env.NODE_ENV === "development") {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Test />
    </React.StrictMode>
  );
}