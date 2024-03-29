import { useLocation } from 'react-router-dom';

function Table(){
        console.log(useLocation().state);    
        return(
        <>

        <h2>Tables</h2>
        </>
    );
}

export default Table;