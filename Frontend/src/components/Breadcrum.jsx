
const Breadcrum = ({ product }) => {
  const arrow = <img src="/Frontend_Assets/breadcrum_arrow.png" alt="" />;

  return (
    <div className="breadcrum">
        Home {arrow} Shop {arrow} {product.category} {arrow} {product.name}
    </div>
  )
}

export default Breadcrum