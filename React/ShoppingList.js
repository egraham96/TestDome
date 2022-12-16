// React is loaded and is available as React and ReactDOM
// imports should NOT be used

import React from 'react';
import * as ReactDOM from 'react-dom';

const sampleItems = [
  {
    name: 'TV',
    id: 876234812
  }
];

class ShoppingList extends React.Component {
  constructor(props) {
    const { items } = props;
    super(props);
    this.state = { items };
    this.removeItem = this.removeItem.bind(this);
  }

    removeItem(id) {
      var myObj=this.props.items
      var myResult={}
      for (const val in myObj) {
        myResult[`${myObj[val].id}`]= `${val}`   
        } 
      if(myResult[id]){
        var myId=myResult[id]
        delete myObj[myId]
      }
    this.setState(myObj)
  }


  render() {
    return(     
      <ul>
        { this.state.items.map( item =>
            <li key={item.id}> {item.name} 
                <button id="removeBtn"
                        onClick={() => this.removeItem(item.id)} 
                        type="button" >Remove</button>
            </li>
          )}
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement);

root.render(<ShoppingList items = { sampleItems } />);

setTimeout(() => {
  document.getElementById("removeBtn").click();
  // Wait for re-render
  setTimeout(() => {
    console.log(rootElement.innerHTML)
  })
});