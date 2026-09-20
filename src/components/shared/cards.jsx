
import Image from 'next/image';
import Link from 'next/link';

const Cards = async () => {
    const res = await fetch('https://a8-apple.vercel.app/data.json');
    const allCards = await res.json();
    // const allCards = allCardsards.slice(0, 4);

    // console.log(topCards);

    return (
        <div className="container mx-auto">
            <h1 className='text-4xl font-bold  p-5 text-center'>Top Four Apple Card</h1>
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
                                    <button className="btn bg-green-400 text-white"><Link href={"details"}>View Details</Link></button>
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