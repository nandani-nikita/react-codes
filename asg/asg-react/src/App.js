import React from "react";
import { fruits } from "./attrList";
import { Header, Footer } from './Related';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruitCollection: { "Mango": 0, "Banana": 0, "Guava": 0, "Pineapple": 0, "Grapes": 0 },
      num: 0,
      total: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
    this.btnCheck = this.btnCheck.bind(this);
  }

  addItem(e) {
    const itemNum = parseInt(e.target.id.slice(3)) - 1;
    var price = (fruits[itemNum].price);

    this.setState((prevState) => {
      this.btnCheck(e.target.id);
      (e.target.id === 'add1') && (prevState.fruitCollection.Mango = prevState.fruitCollection.Mango + 1);
      (e.target.id === 'add2') && (prevState.fruitCollection.Banana = prevState.fruitCollection.Banana + 1);
      (e.target.id === 'add3') && (prevState.fruitCollection.Guava = prevState.fruitCollection.Guava + 1);
      (e.target.id === 'add4') && (prevState.fruitCollection.Pineapple = prevState.fruitCollection.Pineapple + 1);
      (e.target.id === 'add5') && (prevState.fruitCollection.Grapes = prevState.fruitCollection.Grapes + 1);

      let newNum = prevState.num + 1;

      return {
        num: newNum,
        total: prevState.total + price,

      };
    });
  }

  delItem(e) {
    const itemNum = parseInt(e.target.id.slice(3)) - 1;

    var price = 0;
    var newNum = 0;

    this.setState((prevState) => {
      if (prevState.num > 0) {
        switch (e.target.id) {
          case ('del1'):
            if (prevState.fruitCollection.Mango) {
              prevState.fruitCollection.Mango = prevState.fruitCollection.Mango - 1;
              price = fruits[itemNum].price;
              newNum = 1;
            }
            break;
          case ('del2'):
            if (prevState.fruitCollection.Banana) {
              prevState.fruitCollection.Banana = prevState.fruitCollection.Banana - 1;
              price = fruits[itemNum].price;
              newNum = 1;
            }
            break;
          case ('del3'):
            if (prevState.fruitCollection.Guava) {
              prevState.fruitCollection.Guava = prevState.fruitCollection.Guava - 1;
              price = fruits[itemNum].price;
              newNum = 1;
            }
            break;
          case ('del4'):
            if (prevState.fruitCollection.Pineapple) {
              prevState.fruitCollection.Pineapple = prevState.fruitCollection.Pineapple - 1;
              price = fruits[itemNum].price;
              newNum = 1;
            }
            break;
          case ('del5'):
            if (prevState.fruitCollection.Grapes) {
              prevState.fruitCollection.Grapes = prevState.fruitCollection.Grapes - 1;
              price = fruits[itemNum].price;
              newNum = 1;
            }
            break;
          default: break;
        }
        this.btnCheck(e.target.id);

        if (newNum) {
          return {
            num: prevState.num - 1,
            total: prevState.total - price,
          };
        }
      }
    });
  }

  btnCheck(id) {
    var obj = this.state.fruitCollection;
    switch (id) {
      case 'add1': document.getElementById('del1').style.visibility = "visible";
        break;
      case 'add2': document.getElementById('del2').style.visibility = "visible";
        break;
      case 'add3': document.getElementById('del3').style.visibility = "visible";
        break;
      case 'add4': document.getElementById('del4').style.visibility = "visible";
        break;
      case 'add5': document.getElementById('del5').style.visibility = "visible";
        break;

      case 'del1': if (obj.Mango === 0) {
        document.getElementById('del1').style.visibility = "hidden";
      }
        break;
      case 'del2': if (obj.Banana === 0) {
        document.getElementById('del2').style.visibility = "hidden";
      }
        break;
      case 'del3': if (obj.Guava === 0) {
        document.getElementById('del3').style.visibility = "hidden";
      }
        break;
      case 'del4': if (obj.Pineapple === 0) {
        document.getElementById('del4').style.visibility = "hidden";
      }
        break;
      case 'del5': if (obj.Grapes === 0) {
        document.getElementById('del5').style.visibility = "hidden";
      }
        break;
      default: break;
    }
  }

  render() {
    const fruitItems = fruits.map(item => {
      return (<div key={item.id.toString()} style={{ display: "inline-block" }}>
        <span>Price: Rs. {item.price}</span><br />
        <img
          src={"./images/" + item.imageURL}
          className="fruit"
          key={item.id.toString()}
          id={item.id.toString()}
          attr={item}
          alt={item.name}
        />
        <br />
        <button className="btn" id={'add' + item.id.toString()} onClick={this.addItem}>Add</button>
        <button className="btn" id={'del' + item.id.toString()} style={{visibility:"hidden"}} onClick={this.delItem}>Remove</button>

      </div>)

    }
    );
    const fruitsObj = this.state.fruitCollection;
    var cart = "";
    // const cart = <div>
    //   Mango: {fruitsObj.Mango}
    //   Banana: {fruitsObj.Banana}
    //   Guava: {fruitsObj.Guava}
    //   Pineapple: {fruitsObj.Pineapple}
    //   Grapes: {fruitsObj.Grapes}
    // </div>

    for (const key in fruitsObj) {

      cart = `${cart} ${key}: ${fruitsObj[key]}\n`
    }
    return (
      <>
        <Header />

        {fruitItems}
        <br />
        <div><h1>Your Cart Items:</h1></div>
        <h2>{cart}</h2>
        <h3>{this.state.num} total items.</h3>
        <h4>Total: Rs. {this.state.total}</h4>
        <Footer />
      </>
    );
  }
}

export default App;

