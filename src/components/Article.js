import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class Article extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="box box-shadow">
                        <div className="box-header">
                            <h5>{this.props.title || 'Title'}</h5>
                        </div>
                        <div className="article-body">
                            <div className="article-img">
                                <img src={this.props.imageUrl} alt="Article"/>
                            </div>
                            <div className="articles-content">

                                <div>{this.props.description || 'Description'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Article);