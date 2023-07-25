import React from "react";

export const SmallText = (props) => {
    const { title, customStyle } = props;
    return (
        <p style={[{ fontSize: 14, color: "black" }, customStyle]}>{title}</p>
    )
};

export const MediumText = (props) => {
    const { title, customStyle } = props;
    return (
        <p style={[{ fontSize: 16, color: "black" }, customStyle]}>{title}</p>
    )
};

export const LargeText = (props) => {
    const { title, customStyle } = props;
    return (
        <p style={[{ fontSize: 20, color: "black" }, customStyle]}>{title}</p>
    )
};