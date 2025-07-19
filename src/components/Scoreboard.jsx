export default function Scoreboard({currentScore,bestScore}) {
    return (
        <div className="flex justify-center gap-8 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                <span className="font-semibold">Current Score:</span> {currentScore}
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                <span className="font-semibold">Best Score:</span> {bestScore}
            </div>
        </div>
    )
}