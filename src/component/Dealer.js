import React, { Component } from 'react'
import Navbarmenu from "./Navbarmenu"
import Footer from "./footer"
import machnicshoppage from "./pic/machnicshoppage.jpg"
import fristshop from "./pic/carshop/fristshop.jpg"
import twoshop from "./pic/carshop/twoshop.jpg"
import threeshop from "./pic/carshop/threeshop.jpg"
import fourshop from "./pic/carshop/fourshop.jpg"
import fiveshop from "./pic/carshop/fiveshop.jpg"
import sixshop from "./pic/carshop/sixshop.jpg"

export default class Dealer extends Component {
    render() {
        return (
            <div className="Dealer">
                <div className="container-fluid black">
                    <Navbarmenu/>
                    <div className="row">
                        <div className="col-12 Deal ">
                            <div className="col-12 headertext">
                                <h1 className="text-light">Lorem Ipsum</h1>
                                <hr/>
                                <h6 className="text-light">
                                is simply dummy text of the printing and
                                 typesetting industry. Lorem Ipsum has 
                                 been the industry's standard dummy text
                                  ever since the 1500s, when an unknown 
                                  printer took a galley of type and scrambled
                                  it to make a type specimen book. It has surv
                                  ived not only five centuries, but also the leap
                                   into electronic typesetting, remaining essentia
                                   lly unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum
                                     passages, and more recently with desktop publishing 
                                     software like Aldus PageMaker including versions of Lorem Ipsum.
                                </h6>
                            </div>
                           <div className="img">{" - "}</div>
                        </div>



                        <div className="col-12 Dealing">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 p-0">
                                    <img src={fristshop} alt="img" />
                                </div>
                                <div className="col-md-6 col-sm-12 textDeal color1">
                                    <h1 className="text-light">1: Monster Customs</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong>  Atlanta, GA 
                                   <br/>
                                   <strong>Specialty:</strong>  Domestics, SUVs, exotics
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    Monster Customs has built a reputation
                                     stemming from their expertise in the 
                                     12-volt arena. From an aftermarket head 
                                     unit radio swap, all the way up to a 
                                     completely custom car audio installation 
                                     with one-off speaker enclosures and lighting
                                      and everything in between, Monster Customs 
                                      can do it all. In the ATL, they are a "monster"
                                       in the customization game. Ha! All lis
                                    </p>
                                </div>
                            </div>
                        </div>





                        <div className="col-12 Dealing">
                            <div className="row">
                            <div className="col-md-6 col-sm-12 textDeal color2">
                                    <h1 className="text-light">2: 813 Customs</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong>  Tampa, FL
                                   <br/>
                                   <strong>Specialty:</strong>  Tampa, FL
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    If the 22-inch wheels on your 
                                    '80s-era domestic sedan are just 
                                    not cutting it, hit up 813 Customs. 
                                    Not only can they lace you up with some 
                                    ridonkulously humongous wheels, but they 
                                    can spray the exterior with a custom paint 
                                    job and install a banging stereo system that 
                                    is equally loud. What better way to cruise the Dirty South?
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12 p-0">
                                    <img src={twoshop} alt="img" />
                                </div>
                            </div>
                        </div>






                        <div className="col-12 Dealing">
                            <div className="row">
                            <div className="col-md-6 col-sm-12 p-0">
                                    <img src={threeshop} alt="img" />
                            </div>
                                   <div className="col-md-6 col-sm-12 textDeal color3">
                                    <h1 className="text-light">3: Krazy House Customs</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong>  South Brunswick, NJ
                                   <br/>
                                   <strong>Specialty:</strong>  Exotics, Trucks
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    Established in 2007, Krazy House 
                                    Customs expanded from its off-road 
                                    roots to include domestic muscle, 
                                    as well as European luxury and sports 
                                    cars. Equipped with an all-wheel drive 
                                    dyno, Krazy House Customs builds cars 
                                    that not only look better on the street, 
                                    but also perform better. Is that Crazy? 
                                    No, it's Krazy.
                                    </p>
                                </div>                           
                                 </div>
                        </div>





                        <div className="col-12 Dealing">
                            <div className="row">
                            <div className="col-md-6 col-sm-12 textDeal color4">
                                    <h1 className="text-light">4: Godfather Customs</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong> Decatur GA
                                   <br/>
                                   <strong>Specialty:</strong>  Trucks
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    If you're a truck guy, Godfather Customs 
                                    has the parts to fit your steeze. 
                                    For 33 years, Godfather has steadily 
                                    grown its business to offer mail order 
                                    alongside retail and installation at its
                                     Decatur, Georgia facility. With access 
                                     to a broad depth of products, Godfather 
                                     has built custom project vehicles such 
                                     as a Hot Wheels Chevy S-10 truck.

                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12 p-0">
                                    <img src={fourshop} alt="img" />
                            </div>
                            </div>
                        </div>






                        <div className="col-12 Dealing">
                            <div className="row">
                            <div className="col-md-6 col-sm-12 p-0">
                                    <img src={fiveshop} alt="img" />
                            </div>
                            <div className="col-md-6 col-sm-12 textDeal color5">
                                    <h1 className="text-light">5: Xclusv Autosports</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong>   Staten Island, NY
                                   <br/>
                                   <strong>Specialty:</strong> Japanese, European, Luxury, SUV/Truck, Domestic
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    Having worked on Hondas, 
                                    Lambos and everything in-between, 
                                    Xclusv Autosports truly runs the 
                                    gamut. Unfortunately, this gamut 
                                    depleted a chunk of vowels from the 
                                    shop's name. All joking aside (I mean this is a serious list, right?), 
                                    Xclusv works on custom interiors and audio systems, forced induction 
                                    (supercharger or turbocharger), one-off paint, clutch jobs, 
                                    car wraps and more! Their work is so reputable, Xclusv has 
                                    supplied vehicles for the likes of 50 Cent and Cam'ron for 
                                    their music videos. Just don't ask them to try and spell the 
                                    shop's name. Instead, have them peruse the shop's new clothing
                                     and sneaker showroom. New kicks, to match the modified whip.

                                    </p>
                                </div>
                            </div>
                        </div>






                        <div className="col-12 Dealing">
                            <div className="row">
                            <div className="col-md-6 col-sm-12 textDeal color6">
                                    <h1 className="text-light">6: 713 Motoring</h1>
                                    <h3 className="text-light">
                                   <strong>Location:</strong>  Houston, TX
                                   <br/>
                                   <strong>Specialty:</strong>  Domestics, Trucks, SUV, Luxury
                                    </h3>
                                    <br/>
                                    <p className="text-light">
                                    Based in Houston, 713 Motoring takes pride 
                                    in repping their clientele and their area code.
                                     They take pride in driving the same type of cars
                                      as their customers, sharing the same music tastes,
                                       and partying at the same clubs. Borderline stalking
                                        aside, 713 takes pride in their builds, working on cars
                                         from humble domestics to Italian supercars. One other
                                          point of local pride? 713 claims to be the first shop
                                           in Houston to install halo lights on a car. Boom!
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12 p-0">
                                    <img src={sixshop} alt="img" />
                            </div>
                            </div>
                        </div>



                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
