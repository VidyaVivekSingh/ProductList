import React, { Component } from 'react';
import ResultsList from '../ResultList/ResultList';
import Form from '../Form/Form'
import axios from '../../../axios'

class Body extends Component {
    state = {
        data: []
    }
    deleter = (e) => {
        const id = e.target.id;
        console.log(id);
        axios.delete('./products/' + id + '.json')
            .then(function (response) {
                window.location.reload();
            })
            .catch(error => {
                console.log(error)
            });

    }
    componentDidMount() {
        axios.get('/products.json')
            .then(res => {
                let responseData = [];
                for (let prop in res.data) {
                    responseData.push({
                        id: prop,
                        name: res.data[prop].name,
                        payment: res.data[prop].payment,
                        price: res.data[prop].price,
                        quantity: res.data[prop].qty,
                        type: res.data[prop].type,
                        url: res.data[prop].image,
                        cities: res.data[prop].cityList
                    });
                }
                this.setState({
                    data: responseData
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    <div className="row ml-5">
                        <ResultsList products={this.state.data} change={this.deleter} />
                    </div>
                </div>
                <div className="row col-md-12 mt-4">

                    <Form />
                </div>
            </div>
        )

    }
}

export default Body;