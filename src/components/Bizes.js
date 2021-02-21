import React from 'react'
import styled from 'styled-components'
import BizCard from './BizCard'
const Bizes = ({ bizes }) => {
    const sorted = bizes.sort((a, b) => {
        return ((a.review_count * a.rating) / (a.review_count + 1)) -
            ((b.review_count * b.rating) / (b.review_count + 1))
    })
    const renderBizCard = () => {
        return sorted.map((biz, idx) => {
            return <BizCard biz={biz} key={idx} number={idx + 1} />
        })
    }
    return (
        <div>
            <h2>Businesses:</h2>
            <CardContainer>
                {renderBizCard()}
            </CardContainer>
        </div>
    )
}

export default Bizes


const CardContainer = styled.div`
display: flexbox;
flex-wrap: wrap;
justify-content: space-around;
margin: 10px;

`