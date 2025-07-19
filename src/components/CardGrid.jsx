import Card from "./Card"

export default function CardGrid({cards, onCardClick}) {
    return (
        <div>
            {cards.map(card => {
                <Card key={card.id} id={card.id} url={card.url} title={card.title} onClick={onCardClick}/>
            })}
        </div>
    )
}