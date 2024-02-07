import React from 'react'
import { Link } from "react-router-dom";

const Navbar=()=>{
	const maxLength = 80;
	return(
    	<header class="header_area">
			
		<div class="main_menu">

			<nav class="navbar navbar-expand-lg navbar-light">

				<div class="container" >
					<Link class="navbar-brand logo_h" to="/home"><span style={{color:'#854fee',fontFamily:'cursive'}}><h1 style={{fontWeight:'550'}}>{'Mayuri </>'} </h1></span></Link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end" >
							<li  class="nav-item active"><Link class="nav-link" to="/home">Home</Link></li>
							<li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
							<li class="nav-item"><Link class="nav-link" to="/experience">Experience</Link></li>
							<li class="nav-item"><Link class="nav-link" to="/projects">Projects</Link></li>
							<li class="nav-item submenu dropdown">
								<Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false">Achievments</Link>
								<ul class="dropdown-menu">
									<li class="nav-item"><Link class="nav-link" to="/Highlights">Highlights</Link></li>
									<li class="nav-item"><Link class="nav-link" to="/certificates">Certificates</Link></li>
								</ul>
							</li>
							
							<li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
						</ul>
					</div>
				</div>
			</nav>

		</div>
	</header>
    )
}
export default Navbar