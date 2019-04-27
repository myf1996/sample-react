import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
      <Link to={`/menu/${dish.id}`} >
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    );
  }

  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish}/>
        </div>
      );
    });
    console.log("Menu Component Render is invoke")
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>                
        </div>
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