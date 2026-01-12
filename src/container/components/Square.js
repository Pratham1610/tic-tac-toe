import '../../NeonTheme.css';

const Square = (props) => {
    const { value, onSquareClick, isWinningSquare } = props;
    let styleClass = "";

    if (value === 'X') {
        styleClass = "neon-cyan";
    } else if (value === 'O') {
        styleClass = "neon-pink";
    }

    return (
        <button
            className={`square-btn ${styleClass} ${isWinningSquare ? 'winning-square' : ''}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default Square;
