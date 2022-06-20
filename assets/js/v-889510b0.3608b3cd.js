"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26336],{59240:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-889510b0",path:"/devices/EFEKTA_PWS_Max.html",title:"Custom devices (DiY) EFEKTA_PWS_Max control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) EFEKTA_PWS_Max control via MQTT",description:"Integrate your Custom devices (DiY) EFEKTA_PWS_Max via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Soil_moisture (numeric)",slug:"soil-moisture-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EFEKTA_PWS_Max.md",git:{updatedTime:1655741119e3}}},78599:(e,i,t)=>{t.r(i),t.d(i,{default:()=>b});var a=t(66252);const o=(0,a._)("h1",{id:"custom-devices-diy-efekta-pws-max",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-pws-max","aria-hidden":"true"},"#"),(0,a.Uk)(" Custom devices (DiY) EFEKTA_PWS_Max")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"EFEKTA_PWS_Max")],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Vendor"),(0,a._)("td",null,"Custom devices (DiY)")],-1),r=(0,a._)("td",null,"Description",-1),d={href:"http://efektalab.com/PWS_Max",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("Plant watering sensor EFEKTA PWS max"),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"soil_moisture, battery, illuminance, temperature, humidity, linkquality")],-1),m=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_PWS_Max.jpg",alt:"Custom devices (DiY) EFEKTA_PWS_Max"})])],-1),h=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.Uk)("How to use device type specific configuration"),f=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_precision</code>: Number of digits after decimal point for illuminance_lux, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil_moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),v={},b=(0,t(83744).Z)(v,[["render",function(e,i){const t=(0,a.up)("OutboundLink"),v=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("table",null,[l,(0,a._)("tbody",null,[u,n,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a._)("a",d,[c,(0,a.Wm)(t)])])]),s,m])]),h,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(v,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[p])),_:1})])]),f],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);