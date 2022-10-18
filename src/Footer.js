const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} {length === 1 ? "товар" : length === 0 ? "товарів" : 'товари'}</p>
        </footer>
    )
}

export default Footer
