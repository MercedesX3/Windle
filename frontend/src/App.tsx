import { useState } from 'react'

export default function App() {
  return (
    <div className="p-10 bg-white min-h-screen items-center justify-center">
      <div id="header" className="flex flex-column justify-between">
        <h1>Windle Logo</h1>
        <div className="space-x-8">
          <button className="btn-press btn-press:hover">Login</button>
          <button className="btn-default btn-default:hover">Get Started</button>
        </div>
      </div>
      <div id="body" className="bg-primary mt-14">
        <div className="text-dark text-4xl">Image</div>
      </div>
    </div>
  );
}

