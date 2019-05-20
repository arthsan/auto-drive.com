(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){e.exports=a(76)},40:function(e,t,a){},41:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),o=(a(40),a(3)),s=a(4),m=a(6),i=a(5),u=a(7),h=(a(41),a(31)),d=a(1),p=a(16),E=a.n(p),g=function e(){var t=this;Object(o.a)(this,e),this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})};var a=E.a.create({baseURL:"".concat("https://project-cars-app.herokuapp.com","/auth"),withCredentials:!0});this.service=a},b=(a(61),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.getUser(null)})},a.state={loggedInUser:null},a.service=new g,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.user}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?"ADMIN"===this.state.loggedInUser.role?c.a.createElement("div",null,c.a.createElement("nav",{className:"nav justify-content-between nav-style"},c.a.createElement("h1",{className:"adjust logo"},c.a.createElement(d.b,{to:"/"},"PROJECT CARS")),c.a.createElement("div",{className:"adjust row"},c.a.createElement("div",null,c.a.createElement("div",{className:"dropdown"},c.a.createElement(d.b,{to:"/admin/addcar"},c.a.createElement("button",{className:"btn btn-dark add-car"},"Add Car")),c.a.createElement("a",{className:"btn btn-dark dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.loggedInUser.username),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},c.a.createElement(d.b,{to:"/"},c.a.createElement("button",{type:"button",className:"dropdown-item btn btn-dark",onClick:function(){return e.logoutUser()}},"Profile")),c.a.createElement(d.b,{to:"/"},c.a.createElement("button",{type:"button",className:"dropdown-item btn btn-dark",onClick:function(){return e.logoutUser()}},"Logout")))))))):c.a.createElement("div",null,c.a.createElement("nav",{className:"nav justify-content-between nav-style"},c.a.createElement("h1",{className:"adjust logo"},c.a.createElement(d.b,{to:"/"},"PROJECT CARS")),c.a.createElement("div",{className:"adjust row"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("a",{className:"btn btn-dark dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.loggedInUser.username),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},c.a.createElement(d.b,{to:"/"},c.a.createElement("button",{type:"button",className:"dropdown-item btn btn-dark",onClick:function(){return e.logoutUser()}},"Profile")),c.a.createElement(d.b,{to:"/"},c.a.createElement("button",{type:"button",className:"dropdown-item btn btn-dark",onClick:function(){return e.logoutUser()}},"Logout"))))))):c.a.createElement("div",null,c.a.createElement("nav",{className:"nav justify-content-between nav-style"},c.a.createElement("h1",{className:"adjust logo"},c.a.createElement(d.b,{to:"/"},"PROJECT CARS")),c.a.createElement("div",{className:"row adjust"},c.a.createElement("div",null,c.a.createElement(d.b,{to:"/login"},c.a.createElement("button",{type:"button",className:"btn btn-dark"},"Login"))),c.a.createElement("div",null,c.a.createElement(d.b,{to:"/signup"},c.a.createElement("button",{type:"button",className:"btn btn-dark"},"Signup"))))))}}]),t}(n.Component)),f=a(14),v=(a(70),function(e){return c.a.createElement("div",{className:"bd-example car"},c.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},c.a.createElement("ol",{className:"carousel-indicators"},c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),c.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),c.a.createElement("div",{className:"carousel-inner"},c.a.createElement("div",{className:"carousel-item active"},c.a.createElement("img",{src:"https://pontoon-e.com/wp-content/uploads/2018/05/pexels-photo-241316-1920x1080.jpeg",className:"d-block w-100",alt:"porshe"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"We help you to choose your new veichle"),c.a.createElement("p",null,"Have you ever thought driving a Porshe?"))),c.a.createElement("div",{className:"carousel-item"},c.a.createElement("img",{src:"https://images.wallpaperscraft.com/image/honda_civic_turbo_sports_car_113816_1920x1080.jpg",className:"d-block w-100",alt:"lambo"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"Second slide label"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),c.a.createElement("div",{className:"carousel-item"},c.a.createElement("img",{src:"http://www.hdcarwallpapers.com/download/nissan_kicks_concept-1920x1080.jpg",className:"d-block w-100",alt:"bugati"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h5",null,"Third slide label"),c.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),c.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},c.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Previous")),c.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},c.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Next"))))}),N=(a(71),function(e){return c.a.createElement("section",{className:"container cards "},c.a.createElement("div",{className:"card card-size"},c.a.createElement("img",{src:"http://www.redefaisao.com.br/wp-content/uploads/2016/05/AUTOMOVEIS-PNEUS.png",className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"Tyres discount"),c.a.createElement("p",{className:"card-text"},"Use our services to get discount buying new Pirelli tyres."))),c.a.createElement("div",{className:"card card-size"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/7/7646.png",className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"Maintenance bonus"),c.a.createElement("p",{className:"card-text"},"Don't worry about maintenance, we can provide support for you."))),c.a.createElement("div",{className:"card card-size"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/97/97365.png",className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"Tax free"),c.a.createElement("p",{className:"card-text"},"Buying a car from our database, your IPVA in the first year is free."))))}),w=a(9),S=a(15),C=(a(72),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={name:"",stocked:!1},a.handlerChange=a.handlerChange.bind(Object(S.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handlerChange",value:function(e){var t=this,a=e.target,n=a.name,c=a.value;this.setState(Object(w.a)({},n,c),function(){t.props.SearchBar(t.state)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"p-3 mb-2 bg-mercedes text-white"},c.a.createElement("h3",{className:"search-bar"},"Search for vehicle"),c.a.createElement("div",{className:"search-container search-tag"},c.a.createElement("label",null,"Enter car's name:"),c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handlerChange(t)}})))}}]),t}(n.Component)),y=(a(73),function(e){return c.a.createElement("div",null,c.a.createElement("section",{className:"quiz"},c.a.createElement("form",null,c.a.createElement("p",null,"Check now the best oportunity for you and our robots will help based on your necessities"),c.a.createElement("input",{type:"submit",value:"Start Simulation",className:"p-3 mb-2 bg-dark text-white"}))))}),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={loggedInUser:null},a.service=new g,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.user?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(v,null)),c.a.createElement("div",null,c.a.createElement(N,null)),c.a.createElement("div",null,c.a.createElement(C,null)),c.a.createElement("div",null,c.a.createElement(y,null))):c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(v,null)),c.a.createElement("div",null,c.a.createElement(N,null)),c.a.createElement("div",null,c.a.createElement(C,null)))}}]),t}(n.Component),x=(a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:"",redirect:!a.state.redirect}),a.props.getUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(w.a)({},n,c))},a.state={username:"",password:"",redirect:!1},a.service=new g,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?c.a.createElement(f.a,{to:"/"}):c.a.createElement("div",{className:"log-body"},c.a.createElement("form",{className:"login",onSubmit:this.handleFormSubmit},c.a.createElement("label",null,"Username:"),c.a.createElement("input",{type:"text",name:"username",className:"btn btn-light",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",className:"btn btn-light",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("input",{type:"submit",className:"btn btn-dark",value:"Login"})),c.a.createElement("p",null,"Don't have account?",c.a.createElement(d.b,{to:"/signup"}," Signup")))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.setState({redirect:!a.state.redirect},function(){a.props.getUser(e)})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(w.a)({},n,c))},a.state={username:"",password:"",redirect:!1},a.service=new g,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?c.a.createElement(f.a,{to:"/"}):c.a.createElement("div",{className:"log-body"},c.a.createElement("form",{className:"login",onSubmit:this.handleFormSubmit},c.a.createElement("label",null,"Username:"),c.a.createElement("input",{type:"text",name:"username",className:"btn btn-light",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("label",null,"Password:"),c.a.createElement("input",{name:"password",type:"password",className:"btn btn-light",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),c.a.createElement("input",{type:"submit",className:"btn btn-dark",value:"Signup"})),c.a.createElement("p",null,"Already have account?",c.a.createElement(d.b,{to:"/"}," Login")))}}]),t}(n.Component),U=a(34),O=function(e){var t=e.component,a=e.user,n=Object(U.a)(e,["component","user"]);return c.a.createElement(f.b,Object.assign({},n,{render:function(e){return a?c.a.createElement(t,Object.assign({},e,{loggedInUser:a})):c.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))},F=E.a.create({baseURL:"http://localhost:5000/api"}),I=function(e){throw console.error(e),e},P={service:F,handleUpload:function(e){return console.log("file in service: ",e),F.post("/upload",e).then(function(e){return e.data}).catch(I)},saveNewCar:function(e){return console.log("new car is: ",e),F.post("/cars/create",e).then(function(e){return e.data}).catch(I)}},A=(a(74),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(w.a)({},n,c))},a.handleSwitch=function(e){var t=e.target,n=t.name,c=t.checked;a.setState(Object(w.a)({},n,c))},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),P.handleUpload(t).then(function(e){a.setState({imageUrl:e.secure_url})}).catch(function(e){console.log("Error while uploading the file: ",e)})},a.handleSubmit=function(e){e.preventDefault(),P.saveNewCar(a.state).then(function(e){console.log("added: ",e)}).catch(function(e){console.log("Error while adding the thing: ",e)})},a.state={name:"",description:"",imageUrl:"",model:"",brand:"",transmission:"",category:"",rating:"",year:"",price:"",ipva:"",insurance:"",horsePower:"",fuelCost:"",speed:"",depreciation:"",maintenance:"",warranty:"",trunk:"",review:"",abs:!1,parkSensor:!1,airBag:!1,fogLights:!1,backupCam:!1,alarm:!1,airCondit:!1,heightSeat:!1,autoPilot:!1,leatherSeat:!1,sunRoof:!1,steeringWheelAdjust:!1,alloyWheel:!1,headlightSensor:!1,radio:!1,usb:!1,gps:!1,boardPc:!1,steeringMultiFunction:!1,bluetooth:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h2",null,"New Car"),c.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-pad"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Name"),c.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Description"),c.a.createElement("input",{type:"text",className:"form-control",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Model"),c.a.createElement("input",{type:"text",className:"form-control",name:"model",value:this.state.model,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Brand"),c.a.createElement("input",{type:"text",className:"form-control",name:"brand",value:this.state.brand,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Transmission"),c.a.createElement("input",{type:"text",className:"form-control",name:"transmission",value:this.state.transmission,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Category"),c.a.createElement("input",{type:"text",className:"form-control",name:"category",value:this.state.category,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"rating????"),c.a.createElement("input",{type:"text",className:"form-control",name:"description",onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Year"),c.a.createElement("input",{type:"text",className:"form-control",name:"year",value:this.state.year,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Price"),c.a.createElement("input",{type:"text",className:"form-control",name:"price",value:this.state.price,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"IPVA"),c.a.createElement("input",{type:"text",className:"form-control",name:"ipva",value:this.state.ipva,onChange:function(t){return e.handleChange(t)}}))),c.a.createElement("div",{className:"col col-pad"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Insurance"),c.a.createElement("input",{type:"text",className:"form-control",name:"insurance",value:this.state.insurance,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Horsepower"),c.a.createElement("input",{type:"text",className:"form-control",name:"horsepower",value:this.state.horsepower,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Fuel Consumption"),c.a.createElement("input",{type:"text",className:"form-control",name:"fuel consumption",value:this.state.fuelCost,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Speed"),c.a.createElement("input",{type:"text",className:"form-control",name:"speed",value:this.state.speed,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Depreciation"),c.a.createElement("input",{type:"text",className:"form-control",name:"depreciation",value:this.state.depreciation,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Maintenance"),c.a.createElement("input",{type:"text",className:"form-control",name:"maintenance",value:this.state.maintenance,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Warranty"),c.a.createElement("input",{type:"text",className:"form-control",name:"warranty",value:this.state.warranty,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Trunk Size"),c.a.createElement("input",{type:"text",className:"form-control",name:"trunk",value:this.state.trunk,onChange:function(t){return e.handleChange(t)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Review????"),c.a.createElement("input",{type:"text",className:"form-control",name:"review",onChange:function(t){return e.handleChange(t)}})))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-pad"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch1",className:"custom-control-input",name:"abs",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch1"},"ABS")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch2",className:"custom-control-input",name:"parkSensor",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch2"},"Park Sensor")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch3",className:"custom-control-input",name:"airBag",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch3"},"Airbag")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch4",className:"custom-control-input",name:"fogLights",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch4"},"Fog Lights")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch5",className:"custom-control-input",name:"backupCam",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch5"},"Backup Cam")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch6",className:"custom-control-input",name:"alarm",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch6"},"Alarm")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch7",className:"custom-control-input",name:"airCondit",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch7"},"Air Conditioner")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch8",className:"custom-control-input",name:"heightSeat",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch8"},"Height Seat")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch9",className:"custom-control-input",name:"autoPilot",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch9"},"Auto Pilot")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch10",className:"custom-control-input",name:"leatherSeat",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch10"},"Leather Seat"))),c.a.createElement("div",{className:"col col-pad"},c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch11",className:"custom-control-input",name:"sunRoof",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch11"},"Sun Roof")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch12",className:"custom-control-input",name:"steeringWheelAdjust",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch12"},"Steering Wheel Adjust")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch13",className:"custom-control-input",name:"alloyWheel",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch13"},"Alloy Wheel")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch14",className:"custom-control-input",name:"headlightSensor",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch14"},"Headlight Sensor")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch15",className:"custom-control-input",name:"radio",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch15"},"Radio")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch16",className:"custom-control-input",name:"usb",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch16"},"USB")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch17",className:"custom-control-input",name:"gps",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch17"},"GPS")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch18",className:"custom-control-input",name:"boardPc",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch18"},"Computer Board")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch19",className:"custom-control-input",name:"steeringMultiFunction",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch19"},"Steering Multifunction")),c.a.createElement("div",{className:"custom-control custom-switch"},c.a.createElement("input",{type:"checkbox",id:"customSwitch20",className:"custom-control-input",name:"bluetooth",onChange:function(t){return e.handleSwitch(t)}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"customSwitch20"},"Bluetooth")))),c.a.createElement("div",null,c.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),c.a.createElement("button",{type:"submit"},"Save Car"))))}}]),t}(n.Component)),L=(a(75),function(e){return c.a.createElement("div",{className:"p-3 mb-2 bg-dark text-white marg"},c.a.createElement("section",{className:"quiz"},c.a.createElement("div",null,c.a.createElement("p",null,"Check now the best oportunity for you and our robots will help based on your necessities"))))}),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.service=new g,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?c.a.createElement("div",{className:"App"},c.a.createElement(b,{getUser:this.getTheUser,user:this.state.loggedInUser}),c.a.createElement(f.d,null,c.a.createElement(f.b,{exact:!0,path:"/",render:function(){return c.a.createElement(k,{user:e.state.loggedInUser,getUser:e.getTheUser})}}),c.a.createElement(O,{user:this.state.loggedInUser,path:"/admin/addcar",component:A})),c.a.createElement(L,null)):c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(f.d,null,c.a.createElement(f.b,{exact:!0,path:"/",render:function(){return c.a.createElement(k,{getUser:e.getTheUser})}}),c.a.createElement(f.b,{exact:!0,path:"/signup",render:function(){return c.a.createElement(j,{getUser:e.getTheUser})}}),c.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return c.a.createElement(x,{getUser:e.getTheUser})}})),c.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d.a,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.a50ce94e.chunk.js.map