import Button from "./Button";

const Header = ({btnClick}) => {
    return (
        <header className="headerMain">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Task Tracker</h1>
                <Button onClick={btnClick} />
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header

