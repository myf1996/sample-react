import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
  /*
class Menu extends Component {
  
  constructor(props) {
      super(props);

      console.log("Menu Component Constructor is invoke")
  }
  componentDidMount(){
    console.log("Menu Component Component-did-Mount is invoke")
  }*/

  function RenderMenuItem({dish,onClick}) {
    return(
      /** 
      <Card onClick={()=> onClick(dish.id)}>
      */
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
      </Card>
    );
  }

  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick={props.onClick}/>
        </div>
      );
    });
    console.log("Menu Component Render is invoke")
    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
      </div>
    );
  }
  /*
  render() {
      
      console.log("Menu Component Render is invoke")
      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
          </div>
      );
  }
}
*/

export default Menu;