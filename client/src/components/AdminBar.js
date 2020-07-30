import React from 'react';
import { Link } from '@reach/router';

const AdminBar = (props) => {
    return (
        <div className='adminHead'>
            <nav className="adminNav">
                <h3>Admin Pages</h3>
                <Link to="/admin/customers">Customers</Link>
                <Link to="/admin/units">Units</Link>
                <Link to="/admin/unitTypes">Unit Types</Link>
                <Link to="/admin/issues">Issues</Link>
                <Link to="/admin/properties">Property</Link>
            </nav>
        </div>
    )
}

export default AdminBar;