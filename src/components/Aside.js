import React from 'react'
import Card from './Card'
import plus from '../img/plus.png'
import down from '../img/down-arow.png'

const aside = () => {
  return (
    <div>
                <div class="heading-part">
                    <div class="heading">
                        <div class="main-heading">Clients</div>
                        <div class="main-heading-content">Creation Time</div>
                        {/* <div class="plus-icon"><img src="img/plus.png" alt=""></div> */}
                        <div class="plus-icon"><img src={plus} alt={"plus"} /></div>
                    </div>
                    <div class="search-box">
                        <input type="search" placeholder="Company, Entity, User, Domain, Service, Location"></input>
                    </div>
                </div>
                <div class="calender-card">
                    <div class="calender-card-heading">
                        <div class="calender-card-heading-content">April 2021</div>
                        <div class="down-arrow"><img src={down} alt={down}></img></div>
                    </div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
    </div>
  )
}

export default aside