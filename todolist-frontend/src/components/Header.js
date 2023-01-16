import React from 'react';
import { VscChecklist } from "react-icons/vsc";

class Header extends React.Component {
    render() {
        return (
            <header>
                <VscChecklist className='headerIcon'/>
                <div>TODO List</div>
            </header>
        )
    }
}

export default Header