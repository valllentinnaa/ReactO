import React, {Component} from "react";
import {Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class Article extends Component  {
  goToEditPage = () => {
      this.props.history.push(`/articles/${this.props.id}`);
      console.log(this.props);
  };

    deleteArticle = () => {
        this.props.removeArticle(this.props.id);
    };

  render() {
      return (
          <div className="row">
              <div className="col-12">
                  <div className="box box-shadow">
                      <div className="box-header">
                          <h5>{this.props.title || 'Title'}</h5>
                          <div className="box-actions">
                              <Button
                                  size="sm"
                                  color="secondary"
                                  className="mr-2 text-light box-shadow"
                                  onClick={this.goToEditPage}
                              >
                                  <i className="fa fa-edit"></i>
                              </Button>
                              <Button
                                  size="sm"
                                  color="secondary"
                                  className="text-light box-shadow"
                                  onClick={this.deleteArticle}
                              >
                                  <i className="fa fa-trash"></i>
                              </Button>
                          </div>
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

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        removeArticle: actions.removeArticle
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(Article));