export default function Card({id, url, title, onClick}) {
    return (
        <div onClick={() => onClick(id)} className="cursor-pointer rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-200">
            <img src={url} alt={title} className="w-full h-48 object-cover"/>
            <div className="bg-white p-2 text-center text-sm">{title}</div>
        </div>
    )
}