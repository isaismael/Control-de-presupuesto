import react from "react";
import Gasto from "./Gasto";
import PropTypes from 'prop-types';

const Listado = ({gastos}) => (  
    <div className="gastos-realizados" >
        <h2>Listado</h2>
        {gastos.map(gasto =>(
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
        ))}
    </div>
);

Listado.proTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;