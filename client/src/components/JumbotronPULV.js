import React from 'react';
import {Jumbotron, Button,Row,Col, Container} from 'reactstrap';
import ContainerPULV from './ContainerPULV';

console.log("Passed");
class JumbotronPULV extends React.Component {
	render() {
		return (
            <div>
                <Jumbotron className="text-center">
                    <h1 className="display-3">Bienvenue au Pôle Léonard de Vinci</h1><br/>
                    <p className="lead"></p>
                    <hr className="my-2" />
                    <ContainerPULV />
                    <p className="lead">
                    </p>
                </Jumbotron>
            </div>
		);
	}
}
export default JumbotronPULV;