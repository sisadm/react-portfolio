import './Button.css'


export function whiteBtn(name) {
    return (
        <div className="white-btn">
            <p>{name}</p>
        </div>
    )
}

export function blackBtn(name, cName) {
    return (
        <div className={cName}>
            <p>{name}</p>
        </div>
    )
}