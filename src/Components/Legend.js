import React from 'react'

const Legend = (props) => {
    // console.log(props.legendItems)

    return (
        <div style={{
            display: "flex",
            alignItems: "stretch",
        }}>
            {props.legendItems.map((item) => (
                <div 
                    key={item.title} 
                    style={{
                        backgroundColor: item.color, 
                        flex: 1, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        color: item.textColor, 
                        height: "10vh", 
                        fontSize: "18px"
                    }}
                >
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    )
}

export default Legend;