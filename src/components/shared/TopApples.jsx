
const TopApples =async () => {
    const res = await fetch('https://a8-apple-tybd.vercel.app/products.json');
    const info =await res.json();
    console.log(info);
     

    return (
        <div className="container mx-auto">
            <h1>Top Four Apple Card</h1>
        </div>
    );
};

export default TopApples;