import React, { Component } from 'react';
//import logo from './logo.svg';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import DishDetail from './dishdetailcomponent';
/**    Redux Reducer file
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
*/
import Contact from './ContactComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

/** this.state defined the state from redux reducer file(wala kaam kiya hia) */
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    /** Redux Reducer file 
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
    */
  }
  /** 
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }
    */
  render() {
    /** Not Here*/
    const HomePage = () => {
      return(
          <Home 
              //dish={this.state.dishes.filter((dish) => dish.featured)[0]}     from previous state to next state work change working to redux reducer 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    
    /** Not Here*/
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        {/*
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        */}
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
