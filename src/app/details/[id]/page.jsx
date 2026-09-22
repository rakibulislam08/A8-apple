// import React from 'react';

const AppleDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('https://a8-apple.vercel.app/data.json');
  const details = await res.json();
  const detail = details.find(c => c.id == id);
  console.log(detail);

  return (

    <div className="container mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  gap-3 flex-col lg:flex-row">
          <img
            alt={detail.title}
            src={detail.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{detail.title}</h1>
            <p className="mt-2 text-2xl">{detail.category}</p>
            <p className="py-4 text-slate-400">{detail.description} </p>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>

  );
};

export default AppleDetailsPage;