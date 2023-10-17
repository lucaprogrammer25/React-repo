const Container = ({title, children}) => {
    return (
        <div style={{
            backgroundColor: "white",
            border:"1px solid red"
        }}>
        <div>{title}</div>
        <div>{children}</div>
        </div>
    )
}

export default Container;