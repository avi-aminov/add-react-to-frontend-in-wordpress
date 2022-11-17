
const PricintItem = ({img, title, price, isSelected, handelClick}) => {

    

    return (
        <div onClick={handelClick} class={`table-price ${isSelected ? "selected" : ""}`}>
            <div class="pic-item">
                <img src={img} alt="" />
            </div>
            <div class="description">
                <h1 class="title">{title}</h1>
                <span class="price">{price}</span>
            </div>
        </div>
  );
};

export default PricintItem;