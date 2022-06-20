"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87651],{99155:(e,t,d)=>{d.r(t),d.d(t,{data:()=>i});const i={key:"v-55091412",path:"/devices/E1C-NB7.html",title:"Sengled E1C-NB7 control via MQTT",lang:"en-US",frontmatter:{title:"Sengled E1C-NB7 control via MQTT",description:"Integrate your Sengled E1C-NB7 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1C-NB7.md",git:{updatedTime:1655741119e3}}},63179:(e,t,d)=>{d.r(t),d.d(t,{default:()=>u});var i=d(66252);const o=(0,i.uE)('<h1 id="sengled-e1c-nb7" tabindex="-1"><a class="header-anchor" href="#sengled-e1c-nb7" aria-hidden="true">#</a> Sengled E1C-NB7</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1C-NB7</td></tr><tr><td>Vendor</td><td>Sengled</td></tr><tr><td>Description</td><td>Smart plug with energy tracker</td></tr><tr><td>Exposes</td><td>switch (state), power, energy, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1C-NB7.jpg" alt="Sengled E1C-NB7"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),a=(0,i.Uk)("This device supports OTA updates, for more information see "),r=(0,i.Uk)("OTA updates"),s=(0,i.Uk)("."),n=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),c={},u=(0,d(83744).Z)(c,[["render",function(e,t){const d=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("p",null,[a,(0,i.Wm)(d,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[r])),_:1}),s]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[d,i]of t)e[d]=i;return e}}}]);