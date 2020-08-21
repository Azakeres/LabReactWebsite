import React from 'react';


function Test({data}) {


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
		"secondColor": (data.secondColor ? data.secondColor : "rgba(253,158,99,0.9)")
	}


	return <h1>{memberObj.name}</h1>
}

export default Test;