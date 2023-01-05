import React from 'react';

const NotFound = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          className="w-1/2 mx-auto h-[480px]"
          src="https://i.ibb.co/280RRnc/funny-404-error-page-design.gif"
          alt="Not Found"
        />
        <h1 className="text-5xl font-bold">404</h1>
        <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Oops, it looks like the page you're trying to access can't be found!
        </p>
      </div>
    );
};

export default NotFound;