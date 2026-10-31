import Product from "./Product.jsx";

function ProductTab() {
    let options = ["Hi-tech", "Durable", "Fast"];
    // let option2={a:"Hi-tech", b:"Durable",c :"Fast"};
    return (
        <>
            <Product title="New Laptop 12" price={400000} features={options} />
            {/* <Product title="Phone" price={30000} />
            <Product title="Pen" price={10 / 2} /> */}
        </>
    );
}

export default ProductTab;
