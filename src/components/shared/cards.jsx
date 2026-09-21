
import Link from 'next/link';

const Cards = async () => {
    const res = await fetch('https://a8-apple.vercel.app/data.json');
    const allCards = await res.json();
    

    return (
        <div className="container mx-auto">
            <div className=' grid lg:grid-cols-4 gap-3 p-5'>

                {
                    allCards.map(Cards => <div key={Cards.id} >
                        <div className="card bg-base-100 w-full shadow-sm">
                            <figure>
                                <img
                                    src={Cards}
                                    alt={Cards.title}

                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">{Cards.title}</h2>
                                <p className='text-slate-600 font-medium'>{Cards.description}</p>
                                <div className="card-actions mt-4">
                                    <Link href={`/details/${Cards.id}`}>
                                        <button className="btn bg-green-400 text-white">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Cards;