import React, { Component }from 'react';

import ColorNumber from './ColorNumber';



class Bank extends Component {
    constructor(props) {
        super(props)
        this.state = { amount: 0, name: "", itemList: [
            {amount: 250, name: "Salary"},
            {amount: 176, name: "Salary"},
            {amount: -61, name: "Groceries"},
            {amount: -13, name: "Groceries"},
            {amount: -17, name: "Groceries"},
            {amount: -33, name: "Books"},
            {amount: -10, name: "Bread"},
        ],
        search: ""
     };
    }

    changeItem = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      this.setState({ 
          [name]: value,
       });
    }

   

      handleSubmit = () => {

        let item = { amount: +this.state.amount, name: this.state.name }

       this.setState({ 

           itemList: [...this.state.itemList, item],
        })
      }

      income = () => {
         return this.filteredItems()
         .filter(e => e.amount > 0)
         .reduce((a,b) => a + b.amount, 0)
      }

      outcome = () => {
        return this.filteredItems()
        .filter(e => e.amount < 0)
        .reduce((a,b) => a + b.amount, 0)
     }

     balance = () => {
        return this.income() + this.outcome()
     }

     filteredItems = () => {
         return this.state.itemList.filter((e) => 
            e.name.toLowerCase().includes(this.state.search.toLowerCase()))

     }

    render() {
        return (

            <div>

               <h1>Cihem's Bank</h1>

               <div className="form-inline mt-4">
               <div class="input-group">

               <input 
               placeholder="Amount" 
               name="amount" 
               value={this.state.amount}
               onChange={this.changeItem}
               className="form-control"/> 

               <input 
               placeholder="Name" 
               name="name" 
               value={this.state.name}
               onChange={this.changeItem}
               className="form-control ml-3 flex-grow-1"
               />
 
               <button className="btn btn-primary ml-2" onClick={this.handleSubmit}>Add</button>
               </div>
               </div>


               
               
               <div className="row mt-4">

        <div className="col">
            <div className="card card-body shadow border-0">
               <span className="text-muted">Income</span>
               <h3><ColorNumber number={this.income()} /> </h3>

            </div>
            </div>

            <div className="col">
            <div className="card card-body shadow border-0">
               <span className="text-muted">Outcome</span>
               <h3><ColorNumber number={this.outcome()} /></h3>

            </div>
            </div>

            <div className="col">
            <div className="card card-body shadow border-0">
               <span className="text-muted">Balance</span>
               <h3><ColorNumber number={this.balance()} /></h3>

            </div>
            </div>
            </div>

              <div className="mt-4">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Type to search"
                  value={this.state.search}
                  onChange={this.changeItem}
                  name="search"
                  />
            </div>
         

               <ul className="mt-4 list-group">
                   {
                       this.filteredItems().map((item, index) => ( 
                       <li key={index} className="list-group-item d-flex justify-content-between">
                           <strong>{item.name}</strong> 
                           <span><ColorNumber number={item.amount} /></span>
                           </li>
                    
                       ))
                   }
               </ul>
            </div>
        );
    }
}

export default Bank; 