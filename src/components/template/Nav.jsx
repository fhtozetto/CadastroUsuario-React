import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            {/* transformar itens da lista para componetes, futuramente! (NavItem) */}
            <a href="#/">
                <i className="fa fa-home"></i>Inicio
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i>Usuários
            </a>
        </nav>
    </aside>