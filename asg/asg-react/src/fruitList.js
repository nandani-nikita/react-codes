import React from "react";
import { fruits } from "./attrList";

class FruitList extends React.Component {
render() {
    const fruitItems = fruits.map(item => <img src={"images/"+item.imageURL} className="fruit" key={item.id.toString()} id={item.id.toString()} attr={item} alt={item.name}/>);

    return {fruitItems};
}

}


export default FruitList;