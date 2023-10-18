import { useState } from "react";

const Container = ({title, children}) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggleCollapse = () => {
        setCollapsed(t => !t)
    }

    return (
        <div style={{
            backgroundColor: "white",
            border:"1px solid red"
        }}>
        <div>{title} <button onClick={handleToggleCollapse}>Toggle</button></div>
        {collapsed && <div>{children}</div>}
        </div>
    )
}

export default Container;