import React from 'react';

function ChildComponent(props) {
    return <div>{props.message}</div>;
}

function OrderDetail(props){
    return (
        <div className="component">
            OrderDetail
            <h3>Are you {props.welcomeText}</h3>
            <p>Order number: {props.orderNumber()}</p>
            <h4>{props.todaysDate}</h4>
            <ChildComponent message={props.welcomeText} />
        </div>
    );
}

export default OrderDetail;