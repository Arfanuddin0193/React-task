import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (

            <div class="container">

                <div class="navbar">
                    <img src="img/download.jpg" class="logo" />

                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Region</a></li>
                            <li><a href="">About</a></li>


                        </ul>
                    </nav>

                    <img src="img/menu.png" class="menu-icon" />
                </div>

                <div class="row">
                    <div class="col">
                        <h1>Onling Shopping </h1>
                        <p>Promotions on clothing, electronics, sports and more out all the deals.
Payments. Types: Clothing, Phones, Computer, Consumer Electronics, Jewelry, Furniture, Bags, Toys.</p>
                        <br />
                        <button type="button">Explore</button>

                    </div>
                    <div class="col">
                        <div class="card card1">
                            <h5> Watch</h5>
                            <p>This is very uncommon watch.</p>

                        </div>
                        <div class="card card2">
                            <h5>Watch</h5>
                            <p>This is very uncommon watch.</p>

                        </div>
                        <div class="card card3">
                            <h5>Shoes</h5>
                            <p>This is very uncommon shoes.</p>

                        </div>
                        <div class="card card4">
                            <h5>Shoes 2</h5>
                            <p>This is very uncommon shoes.</p>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;