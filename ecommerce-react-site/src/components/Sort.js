const Sort = ({products}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{marginTop: '0'}}>{products.length} Items</p>
            <p style={{marginTop: '0'}}>Sort By: <strong>Price High - Low</strong></p>
        </div>
    );
}

export default Sort;