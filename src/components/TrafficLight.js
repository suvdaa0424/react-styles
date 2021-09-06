import React from 'react'
import styled from 'styled-components';

const Backboard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    border-radius: 50px;
    box-sizing: border-box;
    width: 200px;
    padding: 15px
`
const Light = styled.div`
    height: 140px;
    width: 140px;
    background-color: ${(props) => props.color};
    margin: 15px;
    border-radius: 50%;
    box-shadow: inset 0 20px 20px rgba(0, 0, 0, 0.5);
    opacity: ${(props) => props.on ? '1' : '0.2'}

`

function TrafficLight(props) {
    let redStatus = props.status === 'stop' ? true : false;
    let yellowStatus = props.status === 'wait' ? true : false;
    let greenStatus = props.status === 'go' ? true : false;

    return (
        <Backboard>
            <Light color="red" on={redStatus} />
            <Light color="yellow" on={yellowStatus} />
            <Light color="chartreuse" on={greenStatus} />
        </Backboard>
    )
}

export default TrafficLight
