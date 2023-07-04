import DetailsCSS from '../../styles/Details.module.css';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useState } from 'react';

const Sizing = ({products}) => {
    const sizes = ['S','M','L'];
    return (
        (products.category === "men's clothing" || products.category === "women's clothing") &&
            <div>
                {sizes.map(size => <input type='button' value={size} className={DetailsCSS.button}/>)}
            </div>
    );
}

const Description = ({description, setDescription}) => {
    return (
        description ? 
            <VscChevronUp style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/> :
            <VscChevronDown style={{width: '20px', height:'auto'}} onClick={() => setDescription(!description)} className={DetailsCSS.toggle}/>
    );
}

const DetailsForm = ({products}) => {
    let [description, setDescription] = useState(true);
    return (
        <form>
            <h2>{products.title}</h2>
            <div className={DetailsCSS.size}>
                <h3>${products.price}</h3>
                <Sizing products={products}/>
            </div>
            <div className={DetailsCSS.submit}>
                <input type='number' min={1} max={5} defaultValue={1} />
                <input type='submit' value='ADD TO BAG' onClick={event => event.preventDefault()}/>
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
        </form>
    );
}

export default DetailsForm;