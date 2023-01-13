import React from 'react';
import { VscCalendar } from "react-icons/vsc";

class Header extends React.Component {
    render() {
        return (
            <header>
                <VscCalendar className='headerIcon'/>
                <div>TODO List</div>
            </header>
        )
    }
}

export default Header