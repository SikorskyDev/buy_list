const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} {length === 1 ? "пункт" : "пункта"} списку</p>
        </footer>
    )
}

export default Footer
