import React from "react";
import {Button} from 'reactstrap';
import {Link} from "react-router-dom";

const CardArticle = () => {

    return (
        <>
            <div className="pb-3 text-action">Card title</div>
            <div className="pb-2">Some quick example text to build on the card title and make up
                the bulk of the card's content.
            </div>
            <Link exact to="/articles">
                <Button
                    className="text-white"
                >See more</Button>
            </Link>
        </>
    )
};

export default CardArticle;