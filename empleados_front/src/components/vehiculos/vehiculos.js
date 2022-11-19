import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './vehiculos.css'
import DataGrid from "../grid/grid";

const columns = [
    {
      dataField: "_id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "marca",
      text: "Marca",
    },
    {
      dataField: "modelo",
      text: "Modelo",
    },
    {
      dataField: "color",
      text: "Color",
    },
    {
      dataField: "año",
      text: " Año",
    },
    {
      dataField: "motor",
      text: "Motor",
    },
    {
      dataField: "dueño",
      text: "Dueño",
    },
    {
        dataField: "servicio",
        text: "Servicio",
    },
  ];

export default class Vehiculos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <Container id="vehiculos-container">
                <Row>
                <h2> VEHÍCULOS </h2>
        </Row>
        <Row>
        <DataGrid url="/vehiculos" columns={ columns }/>
        </Row>
                
            </Container>
            
         );
    }
}
 
