import React from 'react';
import './ResultList.css';
const ResultsList = (props) => {
    const listOfProducts = props.products.map(appn => {
        return (
            <div className="col-md-3 float-left card mt-4 mb-2 ml-5 mr-4" style={{ borderColor: "grey", borderWidth: "2px" }}>
                <div className="figure">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-thumbnail" alt={appn.name} src={appn.url} height="200px" width="200px" style={{ float: "left", clear: "left", margin: "5px", borderColor: "grey" }} />
                        </div>
                        <div className="col-8">
                        <span class="close" id={appn.id} onClick={props.change}>x</span>
                            <span className="card-body">
                                <h4 style={{ color: "tomato" }}>{appn.name}</h4>
                                <p>Category : {appn.type}</p>
                                <p>Price : Rs. {appn.price}</p>
                                <p>Quantity : {appn.quantity}</p>
                                <p>Availability :<ul type="none"><li>{appn.cities[0]}</li><li>{appn.cities[1]}</li><li>{appn.cities[2]}</li></ul></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return <div className="ml-2 mt-5" id="list">{listOfProducts}</div>;
}
export default ResultsList;