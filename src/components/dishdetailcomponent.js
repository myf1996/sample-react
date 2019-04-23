import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }

    
    renderDish(dish){
        if (dish != null)
          return(
              <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
    }
    
    
    renderComments(comments){
        const com = comments.map(comment =>{
          return(
            <div class="container">
                <li key={comment.id}>
                    <p>{comment.rating}</p>
                    <p>{comment.comment}</p>
                    <p>{comment.author}</p>
                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            </div>
          );
        });
        
        return(
            <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2>
                <ul className="list-unstyled">
                    {com}
                </ul>
            </div>
        );
    }
    
    render() {
        if (this.props.dish) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    
    

}
export default DishDetail;