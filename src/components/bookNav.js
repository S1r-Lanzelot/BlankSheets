import React from 'react';
import { Link } from 'react-router-dom';

const BookNav = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">BlankSheets</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Accounts">
                            Accounts
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Journal">
                            General Journal
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Ledger">
                            General Ledger
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/BalanceSheet" className="nav-link">
                            Trial Balance
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/BalanceSheet">
                            Balance Sheet
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/IncomeStatement">
                            Income Statement
                    </Link>
                    </li >
                    <li className="nav-item">
                        <Link className="nav-link" to="/CashFlow">
                            Cash Flow Statement
                    </Link>
                    </li >
                </ul>
            </div>
        </nav>
    );
}

export default BookNav;