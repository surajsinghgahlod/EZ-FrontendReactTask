import React from 'react'
import Subentity from './Subentity';
import user from '../img/user-img.png'
import pdf from '../img/pdf.png'
import plus from '../img/plus.png'

const main = () => {
  return (
    <div>
                <div class="side-header">
                    <div class="user-info">
                        <div class="user-name">Hi Abhishek,</div>
                        <div class="user-img"><img src={user} alt=""></img></div>
                    </div>
                </div>
                <div class="row">
                    <div class="side-heading">
                        <div class="side-heading-img"><img src={pdf} alt=""></img></div>
                        <div class="side-heaing">Lucas Films Private Limited</div>
                        <div class="side-heaing-btn"><button class="edit-btn">Edit</button></div>
                    </div>
                    <div class="company-info">
                        <div class="company-info-row">
                            <div class="company-info-row-1">
                                <div class="company-column">
                                    <div class="company-code">Company Code</div>
                                    <div>LUCF</div>
                                </div>
                                <br></br>
                                <div class="company-column">
                                    <div class="company-code">Company Logo</div>
                                    <div>Unavailable</div>
                                </div>
                            </div>
                            <div class="company-info-row-2">
                                <div class="domains">
                                    Domains <br></br>
                                    @lucasfilms.com <br></br>
                                    @lucasstarwars.com <br></br>
                                    @starwars.com <br></br>
                                    + 5 Others
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="multiple-btns">
                    <div>ENTITIES</div>
                    <div>INVOICE CODES</div>
                    <div>USERS</div>
                </div>

                <div class="main-entities-section">
                    <div class="entity-heaing">
                        <div class="entity-count">4 Entities</div>
                        <div class="plus-icon"><img src={plus} alt=""></img></div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 ">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-12">Billing Location</div>
                            <div class="col-lg-3 col-md-3 col-sm-12">Entity Name</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">Entity Code</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">MSLA Valid Through</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">File Sharing</div>
                        </div>
                    </div>
                    <div class="main-enities-row col-lg-12 col-md-12 col-sm-12 ">
                        <div class="row heading-row">
                            <div class="col-lg-3 col-md-3 col-sm-12">Riyadh Kingdom of Saudi Arab</div>
                            <div class="col-lg-3 col-md-3 col-sm-12">Lucas Film Private Limited</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">LUCFO1</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">3 June 2022 - 5 June 2030</div>
                            <div class="col-lg-2 col-md-2 col-sm-12">External</div>
                        </div>
                        <div class="company-info">
                            <div class="company-info-row company-info-second-row">
                                <div class="company-info-row-1">
                                    <div class="company-column">
                                        <div class="company-code">Address</div>
                                        <div>Line1</div>
                                        <div>Line2</div>
                                        <div>City, Country</div>
                                        <div>ZIP Code</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">Charge Code/ PO Number</div>
                                        <div>Required</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">MSLA</div>
                                        <div>202000916</div>
                                    </div>
                                </div>
                                <div class="company-info-row-2">
                                    <div class="company-column">
                                        <div class="company-code">Company Registration Number</div>
                                        <div>UICEf7820987WDU</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">Company Registration Validity</div>
                                        <div>5 June 2025</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">Duration of File Storage</div>
                                        <div>90 Days</div>
                                    </div>
                                </div>

                                <div class="company-info-row-2">
                                    <div class="company-column">
                                        <div class="company-code">Tax Registration Number</div>
                                        <div>AHR3098473J45</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">TRN Validity</div>
                                        <div>5 June 2025</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">Currency</div>
                                        <div>US Dollors</div>
                                    </div>
                                    <br></br>
                                    <div class="company-column">
                                        <div class="company-code">VAT + WHT</div>
                                        <div>5% + 5 %</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <Subentity/>
                    <br></br>
                    <Subentity/>

                </div>
    </div>
  )
}

export default main