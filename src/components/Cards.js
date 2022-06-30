
const list_cards = [
    'France',
    'Espagne',
    'Portugal'
]

function Cards() {
    return (
        <ul>
            {list_cards.map((pays, index) => (
                <li key={`${pays}-${index}`}>{pays}</li>
            ))}
        </ul>
    )
}

export default Cards
