import React from "react";

function Authentication({ title, children }) {
  return (
    <main className="authentication">
      <div className="authentication-card">
        <div className="authentication-card__header">
          <h1 className="authentication-card__header-title">{title}</h1>
        </div>
        <div className="authentication-card__body">{children}</div>
      </div>
    </main>
  );
}

export default Authentication;
