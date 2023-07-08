import DetailsCSS from '../../styles/Details.module.css';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Sizing from './Sizing';

const Description = ({description, setDescription}) => {
    return (
        description ? 
            <VscChevronUp style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/> :
            <VscChevronDown style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/>
    );
}

const DetailsForm = ({products}) => {
    const [description, setDescription] = useState(true);
    const [itemAmount, setItemAmount] = useState();
    const {updateCartAmount} = useContext(AppContext);

    return (
        <div className={DetailsCSS.form}>
            <h2>{products.title}</h2>
            <div className={DetailsCSS.size}>
                <h3>${products.price}</h3>
                <Sizing products={products}/>
            </div>
            <div className={DetailsCSS.submit}>
                <input type='number' defaultValue={0} onChange={(event) => setItemAmount(Number(event.target.value))}/>
                <input type='submit' value='ADD TO BAG' onClick={() => itemAmount && updateCartAmount(products.id, itemAmount)} />
            </div>
            <div className={DetailsCSS.description}>
                <div>
                    <h3>Description</h3>
                    <Description 
                        description={description} 
                        setDescription={setDescription}
                    />
                    </div>
                <p>{description && products.description}</p>
            </div>
        </div>
    );
}

export default DetailsForm;