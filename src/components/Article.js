import React, {useState, Component} from "react";
import {Button} from 'reactstrap';
import getCookie from "../utils/cookie";
import {withRouter} from 'react-router-dom';

class Article extends Component  {
  goToEditPage = () => {
      this.props.history.push(`/articles/${this.props.id}`);
  };

    deleteArticle = async () => {
        await fetch(`http://localhost:9999/api/articles?id=${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(res => {
            alert('Article deleted!');
        }).catch(err => {
            console.log(err);
            alert('Something went wrong!');
        });
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

export default withRouter(Article);