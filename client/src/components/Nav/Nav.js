import Burger from '../Burger'
import Menu from '../Menu'

import React, { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
};

export default Nav;