import React from 'react';
import img from './Images';
import facebook from '../images/FB.png';
import instagram from '../images/Ins.png';
import linkedin from '../images/LI-In-Bug.png';
import pdf from '../images/PDF.png';
import twitter from '../images/Twitter.png';

const color = ["rgba(253,158,99,0.9)", "rgba(88,185,214,0.9)"]


function Member({data}){
	let memberObj = {
		"name": (data.name ? data.name : "default name"),
		"email": (data.email ? data.email : "No email"),
		"pronounce": (data.pronounce ? data.pronounce : "pronounce not provided"),
		"bio": (data.bio ? data.bio : "no bio provided"),
		"linkedin": (data.linkedin ? data.linkedin : "#"),
		"instagram": (data.instagram ? data.instagram : "#"),
		"facebook": (data.facebook ? data.facebook : "#"),
		"resume": (data.resume ? data.resume : "#"),
		"twitter": (data.twitter ? data.twitter : "#"),
		"imgLink": (data.imgLink ? data.imgLink : "#"),
		"firstColor": (data.firstColor ? data.firstColor : "rgba(88,185,214,0.9)"),
		"secondColor": (data.secondColor ? data.secondColor : "rgba(220,118,99,0.9)")
	}

	return(
      <div className="container mb-1 mt-5">
      <section className="card border-secondary rounded-0 mx-auto" style={{maxWidth: '80%'}}>
      <div className="row no-gutters">
            <span className="col-md-4 mx-auto" style= {{backgroundColor: memberObj.firstColor}}>
                    <div className="row">

                      <img
                      src= {memberObj.imgLink}
                      className="card-img rounded-circle mx-auto pt-1" 
                      alt={memberObj.name}
                      style={{maxWidth: "150px"}}/> 
                    </div>
                    <h5 className="row card-title justify-content-center mb-1" style={{marginBottom: "4px!important"}} >{memberObj.name}</h5>

                    <a className="row card-subtitle text-muted justify-content-center mb-1" style={{fontSize: "16px"}}>{memberObj.pronounce}</a>

                    <p className="row justify-content-center" style={{textDecoration: "underline", marginBottom: "0"}}>{memberObj.email}</p>

                    <div className="row justify-content-center d-flex pb-1">

                    <ul className= "list-inline">

                            <li className="list-inline-item">
                            <a href={memberObj.linkedin}>
                            <img id= "Linkedin" className= "img-fluid" src= {linkedin} title="LinkedIn" style={{width: "20px"}}/>
                            </a>
                            </li>

                            <li className="list-inline-item">
                            <a href={memberObj.instagram}>
                            <img id= "Instagram" className= "img-fluid" src= {instagram} title="Instagram" style={{width: "20px"}}/>
                            </a></li>

                            <li className="list-inline-item">
                            <a href={memberObj.facebook}>
                            <img id= "Facebook" className= "img-fluid" src= {facebook} title="Facebook" style={{width: "20px"}}/>
                            </a></li>

                            <li className="list-inline-item">
                            <a href={memberObj.resume}>
                            <img id= "PDF" className= "img-fluid" src= {pdf} title="Resume" style={{width: "20px"}}/>
                            </a></li>


                            <li className="list-inline-item" >
                            <a href={memberObj.twitter}>
                            <img id= "Twitter" className= "img-fluid" src= {twitter} title="Twitter" style={{width: "20px"}}/>
                            </a></li>
                    </ul>

                    </div>
            </span>
            <span className="col-md-8" style={{backgroundColor: memberObj.secondColor}}>
              <div className="card-body">
                <p className="card-text text-left">{memberObj.bio}</p>
              </div>
            </span>

          </div>

        </section>

      </div>
      );
}

export default Member;