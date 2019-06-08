import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle , Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

/*
class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("DishDetailed Component Component-did-Mount is invoke")
    }
    componentDidUpdate(){
        console.log("DishDetailed Component Component-did-Update is invoke")
    }
*/
    function RenderDish(dish){
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

    /*
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
    */

    function RenderComments(comments) {
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
    /*
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
    */

    const DishDetail = (props) => {
        console.log("DishDetailed Component render is invoke")
        if (props.dish) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props.dish)}
                    </div>
                    <div>
                        {RenderComments(props.comments)}
                    </div>
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

    /*
    render() {
        console.log("DishDetailed Component render is invoke")
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
    }*/

//}
export default DishDetail;