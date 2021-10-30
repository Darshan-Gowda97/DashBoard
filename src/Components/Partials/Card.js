import React from 'react';

const Card = ({ header, p1, p2, p3 }) => {
  return (
    <div className="shadow-2xl rounded-xl px-8 py-6 bg-surface flex flex-col justify-center items-center">
      <label className="text-2xl font-semibold pb-4 text-onBackground">
        {header}
      </label>
      <label className="text-onBackground">{p1}</label>
      <label className="text-onBackground">{p2}</label>
      <label className="text-onBackground">{p3}</label>
    </div>
  );
};

export default Card;
