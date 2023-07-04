const Sort = ({products}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{marginTop: '0'}}>{products.length} ITEMS</p>
            <p style={{marginTop: '0'}}>SORT BY: <strong>PRICE HIGH - LOW</strong></p>
        </div>
    );
}

export default Sort;