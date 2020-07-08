import React from "react";
import { Redirect } from "react-router-dom";
import Login from "./LoginComponent";
import { ITEMS } from "./dashboardItems";

class Dashboard extends React.Component {
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />{" "}
            <CardImgOverlay>
              <CardTitle> {dish.name} </CardTitle>{" "}
            </CardImgOverlay>{" "}
          </Card>{" "}
        </div>
      );
    });
    return <div>Hiiii</div>;
  }
}

export default Dashboard;
