import Card from "./Card";

export default function CardGrid({ cards, onCardClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          url={card.url}
          title={card.title}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}