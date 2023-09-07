import React from 'react'

import './Home.scss';


export const Home: React.FC = () => {
    return (
        <div className='main'>

            <section className="main__hero">
                <div className="container hero-block">
                    <div className='main__hero-content'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis perspiciatis, soluta corporis id voluptatum nihil rem at delectus!</p>
                        <a href="" className="main__order-table">Reserve a Table</a>
                    </div>
                    <img src={require('../../assets/restauranfood.jpg')} alt="" className="main__hero-img" />
                </div>
            </section>
            <section className="main__highlights">
                <div className="container">
                    <div className="main__highlights-header">
                        <h3>Spesials</h3>
                        <a href="" className="main__menu">Online Menu</a>
                    </div>
                    <div className="main__spesials">
                        <div className="main__card">
                            <img src={require('../../assets/greek salad.jpg')} alt="" className="main__card-img" />
                            <div className="main__card-header">
                                <span className='main__card-header-title'>title</span>
                                <span className='main__card-header-price'>price</span>
                            </div>
                            <p className="main__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam est repellendus dolores nam reprehenderit perferendis nemo, dolor sunt laborum?</p>
                            <a href="" className="main__card-order-btn">Order a delivery</a>
                        </div>

                        <div className="main__card">
                            <img src={require('../../assets/lemon dessert.jpg')} alt="" className="main__card-img" />
                            <div className="main__card-header">
                                <span className='main__card-title'>title</span>
                                <span className='main__card-price'>price</span>
                            </div>
                            <p className="main__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam est repellendus dolores nam reprehenderit perferendis nemo, dolor sunt laborum?</p>
                            <a href="" className="main__card-order-btn">Order a delivery</a>
                        </div>

                        <div className="main__card">
                            <img src={require('../../assets/restauranfood.jpg')} alt="" className="main__card-img" style={{objectFit:'cover'}}/>
                            <div className="main__card-header">
                                <span className='main__card-title'>title</span>
                                <span className='main__card-price'>price</span>
                            </div>
                            <p className="main__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi totam est repellendus dolores nam reprehenderit perferendis nemo, dolor sunt laborum?</p>
                            <a href="" className="main__card-order-btn">Order a delivery</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main__hero about'>
                <div className="container hero-block">
                    <div className='main__hero-content' style={{color: 'black'}}>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo omnis perspiciatis, soluta corporis id voluptatum nihil rem at delectus!</p>
                        <a href="" className="main__order-table">Reserve a Table</a>
                    </div>
                    <img src={require('../../assets/restauranfood.jpg')} alt="" className="main__hero-img" />
                </div>
            </section>

        </div>
    )
}
