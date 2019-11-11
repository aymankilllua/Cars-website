import React, { Component } from 'react'
import Navbarmenu from "./Navbarmenu"
import Footer from "./footer"
import fristimg from "./pic/fristimg.jpg";
import dodge3 from "./pic/dodge3.png";
import skoda from "./pic/skoda.png";
import gragepic from "./pic/gragepic.jpg";
import youtube from "./pic/youtube.png";
/* import youtube2 from "./pic/youtube2.png";
 */import machnicshop from "./pic/machnicshop.jpg";
import mcahnic from "./pic/mcahnic.jpg";
import web1and9 from "./pic/web1and9.png";
import web2and10 from "./pic/web2and10.png";
import web3 from "./pic/web3.png";
import web4 from "./pic/web4.png";
import web5 from "./pic/web5.png";
import web6 from "./pic/web6.png";
import web7and8 from "./pic/web7and8.png";
import ch1 from "./pic/channel/ch1.jpg";
import ch2 from "./pic/channel/ch2.jpg";
import ch3 from "./pic/channel/ch3.jpg";
import ch4 from "./pic/channel/ch4.jpg";
import ch5 from "./pic/channel/ch5.jpg";
import ch6 from "./pic/channel/ch6.jpg";



export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            one:work,
            two:display,
            three:display,
            four:display,

        }
        this.functionone = this.functionone.bind(this)
        this.functiontwo = this.functiontwo.bind(this)
        this.functionthree = this.functionthree.bind(this)
        this.functionfour = this.functionfour.bind(this)
    }
    functionone(){
        this.setState(()=>{
            return{
                one:work,
                two:display,
                three:display,
                four:display,
            }
        })
    }

    functiontwo(){
        this.setState(()=>{
            return{
                one:display,
                two:work,
                three:display,
                four:display,
            }
        })
    }


    functionthree(){
        this.setState(()=>{
            return{
                one:display,
                two:display,
                three:work,
                four:display,
            }
        })
    }


    functionfour(){
        this.setState(()=>{
            return{
                one:display,
                two:display,
                three:display,
                four:work,
            }
        })
    }

    
    render() {
        return (
            <section style={Pagestyle}>
                <Navbarmenu />
                <div className="container-fluid header">
                   <div className="row">
                        {/* frist review */}
                    <div className="col-md-6 " style={this.state.one} >
                        <div className="headertext">
                            <h1 className="text-light text-lg">/01</h1>
                            <svg width="80%" height="2" style={{background:"#2D2D2D"}} >
                                <rect x="0%" width="20%" fill="#FFF" />
                            </svg>
                            <h2 className="text-light">
                            what this<br/> 
                            website about
                            </h2>
                            <p>It is a long established fact that<br/>a reader will be distracted</p>

                            <h1 className="text-light pio">
                            Now it Easy for <br/> you to Rent or<br/>  Buy a car 
                            </h1>

                        </div>
                    </div>
                    <div className="col-md-6" style={this.state.one}>
                        <div className="headerimg">
                            <img src={dodge3} alt="img"/>
                            <svg width="100%" height="100%" >
                                <circle cx="50%" cy="50%" r="150" fill="#E10032"/>
                            </svg>
                        </div>
                    </div>

                    {/* second review */}
                    <div className="col-md-6" style={this.state.two} >
                        <div className="headertext">
                            <h1 className="text-light text-lg">/02</h1>
                            <svg width="80%" height="2" style={{background:"#2D2D2D"}} >
                                <rect x="20%" width="20%" fill="#FFF" />
                            </svg>
                            <h2 className="text-light">
                            places to Rent or<br/>buy a car
                            </h2>
                            <p>It is a long established fact that<br/>a reader will be distracted</p>

                            <h1 className="text-light pio">
                            we collect<br/> 
                            the best places<br/>
                            for Rent or buy car
                            </h1>

                        </div>
                    </div>
                    <div className="col-md-6" style={this.state.two}>
                        <div className="headerimg">
                            
                            <img src={skoda} className="mt-5" alt="img" />
                            <svg width="100%" height="100%" >
                                <circle cx="55%" cy="50%" r="150" fill="#EADACB"/>
                            </svg>
                        </div>
                    </div>
                    {/* third review */}
                    <div className="col-md-6" style={this.state.three} >
                        <div className="headertext">
                            <h1 className="text-light text-lg">/03</h1>
                            <svg width="80%" height="2" style={{background:"#2D2D2D"}} >
                                <rect x="60%" width="20%" fill="#FFF" />
                            </svg>
                            <h2 className="text-light">
                            Channels for<br/>Best review
                            </h2>
                            <p>It is a long established fact that<br/>a reader will be distracted</p>

                            <h1 className="text-light pio">
                            Best Channels for best<br/>
                              review help you <br/> to get best choose
                            </h1>

                        </div>
                    </div>
                    <div className="col-md-6" style={this.state.three}>
                        <div className="headerimg">
                            <img src={youtube} className="mt-5" alt="img"/>
                            <svg width="100%" height="100%" >
                                <circle cx="55%" cy="50%" r="150" fill="none"/>
                            </svg>
                        </div>
                    </div>
                    {/* four review */}

                    <div className="col-md-6" style={this.state.four} >
                        <div className="headertext">
                            <h1 className="text-light text-lg">/04</h1>
                            <svg width="80%" height="2" style={{background:"#2D2D2D"}} >
                                <rect x="80%" width="20%" fill="#FFF" />
                            </svg>
                            <h2 className="text-light">
                            MachanicShops for<br/>Best Repair
                            </h2>
                            <p>It is a long established fact that<br/>a reader will be distracted</p>

                            <h1 className="text-light pio">
                            best Machnic and Machnicshop <br/> for
                              your cars
                            </h1>

                        </div>
                    </div>
                    <div className="col-md-6" style={this.state.four}>
                        <div className="headerimg">
                            <img src={mcahnic} className="mt-5" alt="img" />
                            <svg width="100%" height="100%" >
                                <circle cx="55%" cy="50%" r="190" fill="#FFF"/>
                            </svg>
                        </div>
                    </div>
                    <div className="col-md-12 selectbox" >
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-10 ">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-xs-6" onClick={this.functionone}>
                                        <div className="selectreview">
                                            <img src={fristimg}  alt="img"/>
                                            <h3 className="text-light">
                                            what this<br/> 
                                            website about
                                            </h3>
                                            <h2 className="text-light">
                                                /01
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6" onClick={this.functiontwo}>
                                    <div className="selectreview">
                                            <img src={gragepic} alt="img"/>
                                            <h3 className="text-light">
                                            places to Rent or<br/>buy a car
                                            </h3>
                                            <h2 className="text-light">
                                                /02
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6" onClick={this.functionthree}>
                                    <div className="selectreview">
                                            <img src={youtube} alt="img"/>
                                            <h3 className="text-light">
                                            Channels for<br/>
                                             Best review
                                            </h3>
                                            <h2 className="text-light">
                                                /03
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6" onClick={this.functionfour}>
                                    <div className="selectreview">
                                            <img src={machnicshop} alt="img"/>
                                            <h3 className="text-light">
                                            best Machnic Shop <br/>for your car
                                            </h3>
                                            <h2 className="text-light">
                                                /04
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                <br/>
               <div className="container-fluid welcome mt-5 mb-5">
                   <div className="container-fluid text-center p-3">
                   <div className="row">
                       <div className="col-md-4 mt-sm-5">
                           <i className="fas fa-map text-success"></i>
                           <h2 className="text-md-left">
                           We collect best 
                           places for Rent 
                           or buy car .
                           and you can get 
                           offer on it too
                           Lorem Ipsum is simply dummy text of 
                           the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                           </h2>
                       </div>
                       <div className="col-md-4 mt-sm-5 text-center">
                       <span className="fas fa-search  text-success"></span>
                           <h2>
                           Searching about 
                        places and channels
                         to collect best 
                        chooses for you
                        Lorem Ipsum is simply dummy text of 
                           the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                           </h2>
                       </div>
                       <div className="col-md-4 mt-sm-5 ">
                       <i className="fas fa-tag text-success"></i>
                           <h2 className="text-md-right">
                           Best price we
                           get for you and 
                           best offer for Rent
                           to get best collect for you
                           Lorem Ipsum is simply dummy text of 
                           the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                           </h2>
                       </div>
                   </div>
                   </div>
               </div>
               
               <div className="container-fluid mt-5 ">

                   <div className="row">
                       <h1 className="col-md-12 text-center mb-5"> The Best websites for a car</h1>
                       <div className="col-md-6 pl-md-3 pl-sm-0 pr-0">
                           <div className="websites">
                           <div className="webtext">
                                   <h1>Edmunda</h1>
                            </div>
                               
                               <img src={web1and9} alt="img" />
                               
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="row">
                               <div className="col-md-6 pl-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Enterprisecarsales</h4>
                            </div>
                               
                               <img src={web2and10}  alt="img"/>
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-0 pr-md-3 pr-sm-0 ">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Autotempest</h4>
                            </div>
                               
                               <img src={web3} alt="img" />
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Cargurus</h4>
                            </div>
                               
                               <img src={web4} alt="img" />
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-0 pr-md-3 pr-sm-">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Hemmings</h4>
                            </div>
                               
                               <img src={web5} alt="img"/>
                               
                           </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="row">
                               <div className="col-md-6 pl-md-3 pl-sm-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Enterprisecarsales</h4>
                            </div>
                               
                               <img src={web6}  alt="img"/>
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Autotempest</h4>
                            </div>
                               
                               <img src={web7and8} alt="img"/>
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-md-3 pl-sm-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Cargurus</h4>
                            </div>
                               
                               <img src={web7and8} alt="img"/>
                               
                           </div>
                               </div>
                               <div className="col-md-6 pl-0 pr-0">
                               <div className="websites">
                           <div className="webtext">
                                   <h4>Hemmings</h4>
                            </div>
                               
                               <img src={web1and9} alt="img"/>
                               

                           </div>
                               </div>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0 pr-md-3 pr-sm-0">
                       <div className="websites">
                           <div className="webtext">
                                   <h1>Enterprisecarsales</h1>
                            </div>
                               
                               <img src={web2and10} alt="img"/>
                               
                           </div>
                       </div>

                   </div>

               </div>
               <br/>
               <br/>
               <br/>

               <div className="container-fluid  slider">
                   <h1 className="text-center"> Best Channels  </h1>
                   <div className="row">
                       <div className="owl-carousel">
                       {/* frist slide */}
                       <div className="col-md-12 myslider ">
                           <div className="row">
                               
                               <div className="col-md-8 d-md-none  d-sm-block slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>1</h1> /06</h3>
                                   <img src={ch1} alt="img"/>
                               </div>



                               <div className="col-md-4 slidetext">
                                   <h2>Carwow</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">2,599,496</span></h4>
                                   <h4>Views:<span className="text-danger text-right">686,647,905</span></h4>
                                   <h4>Video:<span className="text-danger text-right">1,050</span></h4>
                                   <p className="mt-5">Buying a new car is one of the most 
                                       exciting purchases most people make,
                                        but it's often let down by the experience.
                                         Trudging round the dealers, haggling over price,
                                          always wondering if you're getting a good dea</p>
                               </div>


                               <div className="col-md-8 d-md-block  d-sm-none d-none   slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>1</h1> /06</h3>
                                   <img src={ch1} alt="img"/>
                               </div>



                           </div>
                       </div>
                       {/* second slide */}                         
                       <div className="col-md-12 myslider fadeing">
                       <div className="row">
                               <div className="col-md-8 d-md-none  slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>2</h1> /06</h3>
                                   
                                   <img src={ch2} alt="img"/>
                               </div>
                               <div className="col-md-4 slidetext">
                                   <h2>Motor Trend Channle</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">6,353,895</span></h4>
                                   <h4>Views:<span className="text-danger text-right">1,060,292,902</span></h4>
                                   <h4>Video:<span className="text-danger text-right">2,192</span></h4>
                                   <p className="mt-5">Get your automotive
                                    adrenaline charge right here on the Motor
                                    Trend channel. From first drives and tests 
                                    of the hottest new supercars and classic muscle
                                    cars to the latest automotive news from around
                                    the world, to the incredible machinery and 
                                    personalities from beyond the automotive
                                    mainstream, the Motor Trend channel has it all, delivered daily. </p>
                               </div>
                               <div className="col-md-8 d-md-block d-sm-none d-none  slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>2</h1> /06</h3>
                                   
                                   <img src={ch2} alt="img"/>
                               </div>
                           </div>
                       </div>

                       {/* third slide */}
                       <div className="col-md-12 myslider fadeing">
                       <div className="row">
                               <div className="col-md-8 d-md-none  slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>3</h1> /06</h3>
                                   
                                   <img src={ch3} alt="img"/>
                                   <div className="controllsm">
                                      
                                   </div>
                               </div>
                               <div className="col-md-4 slidetext ">
                                   <h2>Shmee150</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">1,844,480</span></h4>
                                   <h4>Views:<span className="text-danger text-right">653,676,685 </span></h4>
                                   <h4>Video:<span className="text-danger text-right">3,761</span></h4>
                                   <p className="mt-5">Shmee150 is the personal brand 
                                   of Tim Burton, a.k.a. Shmee, who travels the world 
                                   to seek out the greatest and most exclusive automotive 
                                   content possible. He captures the content using his signature 
                                   video selfie technique! This channel is about him living the supercar dream. </p>
                               </div>
                               <div className="col-md-8 d-md-block d-sm-none  d-none slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>3</h1> /06</h3>
                                   
                                   <img src={ch3} alt="img"/>
                               </div>
                           </div>
                       </div>

                       {/* four slide */}
                       <div className="col-md-12 myslider fadeing">
                       <div className="row">
                               <div className="col-md-8 d-md-none  slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>4</h1> /06</h3>
                                   
                                   <img src={ch4} alt="img"/>
                                  
                               </div>
                               <div className="col-md-4 slidetext ">
                                   <h2> The Fast Lane Car</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">823,474</span></h4>
                                   <h4>Views:<span className="text-danger text-right"> 386,042,781 </span></h4>
                                   <h4>Video:<span className="text-danger text-right">3,032</span></h4>
                                   <p className="mt-5">Automotive news, views, and real-world reviews from an 'everyman' perspective.  </p>
                               </div>
                               <div className="col-md-8 d-md-block d-sm-none d-none  slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>4</h1> /06</h3>
                                   
                                   <img src={ch4} alt="img"/>
                               </div>
                           </div>
                       </div>

                       {/* five slide */}
                       <div className="col-md-12 myslider fadeing">
                       <div className="row">
                               <div className="col-md-8 d-md-none  slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>5</h1> /06</h3>
                                   
                                   <img src={ch5} alt="img"/>
                                  
                               </div>
                               <div className="col-md-4 slidetext ">
                                   <h2>Autogefühl</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">416,000</span></h4>
                                   <h4>Views:<span className="text-danger text-right"> 183,054,918</span></h4>
                                   <h4>Video:<span className="text-danger text-right"> 2,223</span></h4>
                                   <p className="mt-5">Autogefühl is your number one resource 
                                   for in-depth car reviews and your number one community to 
                                   discuss cars. We are delivering you about 150 FULL REVIEWS 
                                   on new cars per year, covering all brands, all segments and all price ranges.  </p>
                               </div>
                               <div className="col-md-8 d-md-block d-sm-none d-none  slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>5</h1> /06</h3>
                                   
                                   <img src={ch5} alt="img"/>
                               </div>
                           </div>
                       </div>


                       {/* six slide */}
                       <div className="col-md-12 myslider fadeing">
                       <div className="row">
                               <div className="col-md-8 d-md-none  slideimg">
                               <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>6</h1> /06</h3>
                                   
                                   <img src={ch6} alt="img"/>
                                   
                               </div>
                               <div className="col-md-4 slidetext ">
                                   <h2> Doug DeMuro</h2>
                                   <h4>Subscrib:<span className="text-danger text-right">3,110,000</span></h4>
                                   <h4>Views:<span className="text-danger text-right"> 844,878,980</span></h4>
                                   <h4>Video:<span className="text-danger text-right">  432</span></h4>
                                   <p className="mt-5">Doug DeMuro, Editor and the author of this channel posts videos on car reviews.  </p>
                               </div>
                               <div className="col-md-8 d-md-block d-sm-none d-none  slideimg">
                                   <svg width="200px" height="70px">
                                       <rect x="0" width="100%" height="100%" fill="#fff"/>
                                   </svg>
                                   <h3 className="text-light"><h1>6</h1> /06</h3>
                                   
                                   <img src={ch6} alt="img"/>
                               </div>
                           </div>

                       </div>
                   </div>
                   
                   </div>
               </div>
               <br/>
               <br/>
               <br/>
               <br/>
               <Footer/>
               </section>
        )
    }
}
const Pagestyle = {
    background:"#000",
    height:window.innerHeight
}
const display = {
    height:0,
    opacity:0,
    transition:".01s"
}
const work = {
    height:"100%",
    opacity:1,
    transition:"1s"

}



   

   