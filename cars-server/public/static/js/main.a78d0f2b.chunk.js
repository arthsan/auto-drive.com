(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},40:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),o=(a(39),a(2)),s=a(4),i=a(6),u=a(5),m=a(7),h=(a(40),a(30)),d=a(3),p=a(15),E=a.n(p);E.a.get("".concat("https://project-cars-app.herokuapp.com","/auth"),{withCredentials:!0});var g=function e(){var t=this;Object(o.a)(this,e),this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})};var a=E.a.create({baseURL:"http://localhost:5000/auth",withCredentials:!0});this.service=a},b=(a(60),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.getUser(null)})},a.state={loggedInUser:null},a.service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.user}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?l.a.createElement("div",null,l.a.createElement("nav",{className:"nav justify-content-between nav-style"},l.a.createElement("h1",{className:"adjust logo"},l.a.createElement(d.b,{to:"/"},"PROJECT CARS")),l.a.createElement("div",{className:"adjust row"},l.a.createElement("div",null,l.a.createElement(d.b,{to:"/admin/addcar"},l.a.createElement("button",{className:"btn btn-dark"},"Add Car"))),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/"},l.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){return e.logoutUser()}},"Logout")))))):l.a.createElement("div",null,l.a.createElement("nav",{className:"nav justify-content-between nav-style"},l.a.createElement("h1",{className:"adjust logo"},l.a.createElement(d.b,{to:"/"},"PROJECT CARS")),l.a.createElement("div",{className:"row adjust"},l.a.createElement("div",null,l.a.createElement(d.b,{to:"/login"},l.a.createElement("button",{type:"button",className:"btn btn-dark"},"Login"))),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/signup"},l.a.createElement("button",{type:"button",className:"btn btn-dark"},"Signup"))))))}}]),t}(n.Component)),f=a(14),v=(a(69),function(e){return l.a.createElement("div",{className:"bd-example car"},l.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{src:"https://pontoon-e.com/wp-content/uploads/2018/05/pexels-photo-241316-1920x1080.jpeg",className:"d-block w-100",alt:"porshe"}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",null,"We help you to choose your new veichle"),l.a.createElement("p",null,"Have you ever thought driving a Porshe?"))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{src:"https://images.wallpaperscraft.com/image/honda_civic_turbo_sports_car_113816_1920x1080.jpg",className:"d-block w-100",alt:"lambo"}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{src:"http://www.hdcarwallpapers.com/download/nissan_kicks_concept-1920x1080.jpg",className:"d-block w-100",alt:"bugati"}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))}),w=(a(70),function(e){return l.a.createElement("section",{className:"container cards "},l.a.createElement("div",{className:"card card-size"},l.a.createElement("img",{src:"http://www.redefaisao.com.br/wp-content/uploads/2016/05/AUTOMOVEIS-PNEUS.png",className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,"Tyres discount"),l.a.createElement("p",{className:"card-text"},"Use our services to get discount buying new Pirelli tyres."))),l.a.createElement("div",{className:"card card-size"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/7/7646.png",className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,"Maintenance bonus"),l.a.createElement("p",{className:"card-text"},"Don't worry about maintenance, we can provide support for you."))),l.a.createElement("div",{className:"card card-size"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/97/97365.png",className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,"Tax free"),l.a.createElement("p",{className:"card-text"},"Buying a car from our database, your IPVA in the first year is free."))))}),N=a(9),S=a(16),C=(a(71),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"",stocked:!1},a.handlerChange=a.handlerChange.bind(Object(S.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handlerChange",value:function(e){var t=this,a=e.target,n=a.name,l=a.value;this.setState(Object(N.a)({},n,l),function(){t.props.SearchBar(t.state)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"p-3 mb-2 bg-mercedes text-white"},l.a.createElement("h3",{className:"search-bar"},"Search for vehicle"),l.a.createElement("div",{className:"search-container search-tag"},l.a.createElement("label",null,"Enter car's name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handlerChange(t)}})))}}]),t}(n.Component)),y=(a(72),function(e){return l.a.createElement("div",null,l.a.createElement("section",{className:"quiz"},l.a.createElement("form",null,l.a.createElement("p",null,"Check now the best oportunity for you and our robots will help based on your necessities"),l.a.createElement("input",{type:"submit",value:"Start Simulation",className:"p-3 mb-2 bg-dark text-white"}))))}),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null},a.service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.user?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v,null)),l.a.createElement("div",null,l.a.createElement(w,null)),l.a.createElement("div",null,l.a.createElement(C,null)),l.a.createElement("div",null,l.a.createElement(y,null))):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(v,null)),l.a.createElement("div",null,l.a.createElement(w,null)),l.a.createElement("div",null,l.a.createElement(C,null)))}}]),t}(n.Component),k=(a(73),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:"",redirect:!a.state.redirect}),a.props.getUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(N.a)({},n,l))},a.state={username:"",password:"",redirect:!1},a.service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(f.a,{to:"/"}):l.a.createElement("div",{className:"log-body"},l.a.createElement("form",{className:"login",onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",className:"btn btn-light",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",className:"btn btn-light",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",className:"btn btn-dark",value:"Login"})),l.a.createElement("p",null,"Don't have account?",l.a.createElement(d.b,{to:"/signup"}," Signup")))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.setState({redirect:!a.state.redirect},function(){a.props.getUser(e)})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(N.a)({},n,l))},a.state={username:"",password:"",redirect:!1},a.service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(f.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("textarea",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement("p",null,"Already have account?",l.a.createElement(d.b,{to:"/"}," Login")))}}]),t}(n.Component),O=a(33),U=function(e){var t=e.component,a=e.user,n=Object(O.a)(e,["component","user"]);return l.a.createElement(f.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,Object.assign({},e,{loggedInUser:a})):l.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))},F=E.a.create({baseURL:"http://localhost:5000/api"}),P=function(e){throw console.error(e),e},I={service:F,handleUpload:function(e){return console.log("file in service: ",e),F.post("/upload",e).then(function(e){return e.data}).catch(P)},saveNewCar:function(e){return console.log("new car is: ",e),F.post("/cars/create",e).then(function(e){return e.data}).catch(P)}},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(N.a)({},n,l))},a.handleSwitch=function(e){var t=e.target,n=t.name,l=t.checked;a.setState(Object(N.a)({},n,l))},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),I.handleUpload(t).then(function(e){a.setState({imageUrl:e.secure_url})}).catch(function(e){console.log("Error while uploading the file: ",e)})},a.handleSubmit=function(e){e.preventDefault(),I.saveNewCar(a.state).then(function(e){console.log("added: ",e)}).catch(function(e){console.log("Error while adding the thing: ",e)})},a.state={name:"",description:"",imageUrl:"",model:"",brand:"",transmission:"",category:"",rating:"",year:"",price:"",ipva:"",insurance:"",horsePower:"",fuelCost:"",speed:"",depreciation:"",maintenance:"",warranty:"",trunk:"",review:"",abs:!1,parkSensor:!1,airBag:!1,fogLights:!1,backupCam:!1,alarm:!1,airCondit:!1,heightSeat:!1,autoPilot:!1,leatherSeat:!1,sunRoof:!1,steeringWheelAdjust:!1,alloyWheel:!1,headlightSensor:!1,radio:!1,usb:!1,gps:!1,boardPc:!1,steeringMultiFunction:!1,bluetooth:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h2",null,"New Car"),l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Model"),l.a.createElement("input",{type:"text",name:"model",value:this.state.model,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Brand"),l.a.createElement("input",{type:"text",name:"brand",value:this.state.brand,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Transmission"),l.a.createElement("input",{type:"text",name:"transmission",value:this.state.transmission,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Category"),l.a.createElement("input",{type:"text",name:"category",value:this.state.category,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"rating????"),l.a.createElement("input",{type:"text",name:"description",onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Year"),l.a.createElement("input",{type:"text",name:"year",value:this.state.year,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Price"),l.a.createElement("input",{type:"text",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"IPVA"),l.a.createElement("input",{type:"text",name:"ipva",value:this.state.ipva,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Insurance"),l.a.createElement("input",{type:"text",name:"insurance",value:this.state.insurance,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Horsepower"),l.a.createElement("input",{type:"text",name:"horsepower",value:this.state.horsepower,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Fuel Consumption"),l.a.createElement("input",{type:"text",name:"fuel consumption",value:this.state.fuelCost,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Speed"),l.a.createElement("input",{type:"text",name:"speed",value:this.state.speed,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Depreciation"),l.a.createElement("input",{type:"text",name:"depreciation",value:this.state.depreciation,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Maintenance"),l.a.createElement("input",{type:"text",name:"maintenance",value:this.state.maintenance,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Warranty"),l.a.createElement("input",{type:"text",name:"warranty",value:this.state.warranty,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Trunk Size"),l.a.createElement("input",{type:"text",name:"trunk",value:this.state.trunk,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Review????"),l.a.createElement("input",{type:"text",name:"review",onChange:function(t){return e.handleChange(t)}})),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch1",className:"custom-control-input",name:"abs",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},"ABS")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch2",className:"custom-control-input",name:"parkSensor",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch2"},"Park Sensor")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch3",className:"custom-control-input",name:"airBag",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch3"},"Airbag")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch4",className:"custom-control-input",name:"fogLights",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch4"},"Fog Lights")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch5",className:"custom-control-input",name:"backupCam",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch5"},"Backup Cam")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch6",className:"custom-control-input",name:"alarm",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch6"},"Alarm")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch7",className:"custom-control-input",name:"airCondit",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch7"},"Air Conditioner")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch8",className:"custom-control-input",name:"heightSeat",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch8"},"Height Seat")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch9",className:"custom-control-input",name:"autoPilot",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch9"},"Auto Pilot")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch10",className:"custom-control-input",name:"leatherSeat",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch10"},"Leather Seat")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch11",className:"custom-control-input",name:"sunRoof",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch11"},"Sun Roof")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch12",className:"custom-control-input",name:"steeringWheelAdjust",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch12"},"Steering Wheel Adjust")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch13",className:"custom-control-input",name:"alloyWheel",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch13"},"Alloy Wheel")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch14",className:"custom-control-input",name:"headlightSensor",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch14"},"Headlight Sensor")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch15",className:"custom-control-input",name:"radio",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch15"},"Radio")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch16",className:"custom-control-input",name:"usb",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch16"},"USB")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch17",className:"custom-control-input",name:"gps",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch17"},"GPS")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch18",className:"custom-control-input",name:"boardPc",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch18"},"Computer Board")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch19",className:"custom-control-input",name:"steeringMultiFunction",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch19"},"Steering Multifunction")),l.a.createElement("li",{className:"custom-control custom-switch"},l.a.createElement("input",{type:"checkbox",id:"customSwitch20",className:"custom-control-input",name:"bluetooth",onChange:function(t){return e.handleSwitch(t)}}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch20"},"Bluetooth")),l.a.createElement("li",null,l.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),l.a.createElement("button",{type:"submit"},"Save Car")))))}}]),t}(n.Component),T=(a(74),function(e){return l.a.createElement("div",{className:"p-3 mb-2 bg-dark text-white marg"},l.a.createElement("section",{className:"quiz"},l.a.createElement("div",null,l.a.createElement("p",null,"Check now the best oportunity for you and our robots will help based on your necessities"))))}),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new g,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?l.a.createElement("div",{className:"App"},l.a.createElement(b,{getUser:this.getTheUser,user:this.state.loggedInUser}),l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/",render:function(){return l.a.createElement(x,{user:e.state.loggedInUser,getUser:e.getTheUser})}}),l.a.createElement(U,{user:this.state.loggedInUser,path:"/admin/addcar",component:A})),l.a.createElement(T,null)):l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/",render:function(){return l.a.createElement(x,{getUser:e.getTheUser})}}),l.a.createElement(f.b,{exact:!0,path:"/signup",render:function(){return l.a.createElement(j,{getUser:e.getTheUser})}}),l.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return l.a.createElement(k,{getUser:e.getTheUser})}})),l.a.createElement(T,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.a78d0f2b.chunk.js.map