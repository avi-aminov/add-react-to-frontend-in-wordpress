import { useState, useEffect } from 'react';
import PricintItem from "./components/PricintItem";

const App = () => {
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState('standard');
    const curent_id = appLocalizer.id;

    useEffect(() => {
        fetch(appLocalizer.apiUrl + '/acf/v3/pages/' + curent_id)
        .then(response => response.json())
        .then( (posts) => {
            
            if(posts.acf){
                setData(posts.acf);
            }
        });
    }, []);

    const handelIsActice = (active) => {
        setSelected(active);
    }

    return (
        <div class="container">
        {
            data ?
            <>
                <PricintItem 
                    img={data.premium_Image} 
                    title={data.premium_text} 
                    price={data.premium_price}
                    isSelected={selected == 'premium'}
                    handelClick={() =>handelIsActice('premium')}
                /> 
                <PricintItem 
                    img={data.standard_Image} 
                    title={data.standard_text} 
                    price={data.standard_price}
                    isSelected={selected == 'standard'} 
                    handelClick={() =>handelIsActice('standard')}
                /> 
                <PricintItem 
                    img={data.basic_Image} 
                    title={data.basic_text} 
                    price={data.basic_price}
                    isSelected={selected == 'basic'}
                    handelClick={() => handelIsActice('basic')}
                />
            </> 
            :
            null
        }
        </div>
  );
};

export default App;