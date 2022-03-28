import React, { Component } from 'react';
import * as BootStrap from "react-bootstrap";


class nav extends Component {
    render() {
        return (
            <div>
                <BootStrap.Navbar bg="dark" variant="dark">
                    <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="#home">
                        Studio Ghibli Movies
                    </BootStrap.Navbar.Brand>
                    </BootStrap.Container>
                </BootStrap.Navbar>
            </div>
        );
    }
}

export default nav;