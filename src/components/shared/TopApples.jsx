
import Image from 'next/image';

const TopApples = async () => {
    const res = await fetch('https://a8-apple.vercel.app/data.json');
    const cards = await res.json();
    const topCards = cards.slice(0, 4);

    console.log(topCards);

    return (
        <div className="container mx-auto">
            <h1 className='text-4xl font-bold  p-5 text-center'>Top Four Apple Card</h1>
            <div className=' grid grid-cols-4 gap-3 p-5'>

                {
                    topCards.map(card => <div key={card.id} >
                        <div className="card bg-base-100 w-full shadow-sm">
                            <figure>
                                <img
                                    src={card.Image}
                                    alt={card.title}

                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{card.title}</h2>
                                <p className='text-slate-600 font-medium'>{card.description}</p>
                                <div className="card-actions mt-4">
                                    <button className="btn btn-accent text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default TopApples;