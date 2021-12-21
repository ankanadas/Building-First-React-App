import React from 'react'

export default function Ingredient({name, quantity}) {
    return (
        <>
            <span>{name}</span>
            <span>{quantity}</span>
        </>
    )
}
