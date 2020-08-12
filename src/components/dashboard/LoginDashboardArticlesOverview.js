import React from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

const ArticlesOverview = () => {
    return (
        <>
            <div className="pb-2">
                <div className="text-action pb-2">Most recent subjects</div>
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                </ListGroup>
            </div>
        </>
    )
};

export default ArticlesOverview;