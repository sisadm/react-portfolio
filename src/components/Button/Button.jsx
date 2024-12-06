import './../../index.css'


export function whiteBtn(name) {
    return (
        <button className="bg-white hover:bg-gray-100 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    )
}

export function blackBtn(name) {
    return (
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            {name}
        </button>
    )
}