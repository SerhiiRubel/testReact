import React, { Component } from 'react';
import {
    Button,
    ProductItemComponent
} from './../../components/index';

import react from './../../assets/img/react.png';
import js from './../../assets/img/js.png';


export default class ProductListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
        }
    }

    render() {
        return (
          <section className="productList">
            <Button
                handleClick={ () => this.handleClick() }
            />
            <div className={`productsWrapper ${ this.state.isClick ? 'twoColumns' : '' }`}>
                {this.renderAllProducts()}
            </div>
          </section>
        );
    }

    handleClick() {
        this.setState({
            isClick: !this.state.isClick,
        });
    }

    renderAllProducts() {
        const Products = [
            {
                id: 1,
                title: 'Product1',
                src: `${js}`
            },
            {
                id: 2,
                title: 'Product2',
                src: `${react}`
            },
            {
                id: 3,
                title: 'Product3',
                src: `${js}`
            },
            {
                id: 4,
                title: 'Product4',
                src: `${react}`
            },
            {
                id: 5,
                title: 'Product5',
                src: `${js}`
            },
            {
                id: 6,
                title: 'Product6',
                src: `${react}`
            },
        ];
        return Products.map( (item) => (
            <ProductItemComponent
                key={item.id}
                id={item.id}
                title={item.title}
                file={item.src}
                {...this.state}
            />
            )
        )
    }

}