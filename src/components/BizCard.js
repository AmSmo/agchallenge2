import React, { useState } from 'react'
import styled from "styled-components"

const BizCard = ({ biz, number }) => {
    //Name
    // Address
    // Image
    // Star Rating
    // Review_count
    // Link to yelp page
    const address = () => {
        return biz.location.display_address.map((addy, idx) => {
            return <div key={idx}>{addy}</div>
        })
    }
    return (
        <Card>
            <a href={biz.url} target="_blank" rel="noreferrer">
                <h2>{number}: {biz.name}</h2>
                <div>{address()}</div>
                <Image src={biz.image_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/800px-Feature_parking.svg.png"} />
                <div>Rating: {biz.rating}</div>
                <div>Review Count: {biz.review_count}</div>
                <div>Weighted: {(biz.review_count * biz.rating) / (biz.review_count + 1)}</div>
            </a>
        </Card>
    )

}

export default BizCard

const Card = styled.div`
height: auto;
width: 300px;
border: 1px 1px solid black;
border-radius: 15px;
margin: 20px;
box-shadow: 1px 1px 10px black;
`

const Image = styled.img`
width: 250px;
height: auto;
max-height: 250px;
`