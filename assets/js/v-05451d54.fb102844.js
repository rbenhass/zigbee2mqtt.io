"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61502],{68169:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-05451d54",path:"/devices/404002.html",title:"Müller Licht 404002 control via MQTT",lang:"en-US",frontmatter:{title:"Müller Licht 404002 control via MQTT",description:"Integrate your Müller Licht 404002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-30T11:31:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/404002.md",git:{updatedTime:1655741119e3}}},50896:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(66252);const n=(0,a.uE)('<h1 id="muller-licht-404002" tabindex="-1"><a class="header-anchor" href="#muller-licht-404002" aria-hidden="true">#</a> Müller Licht 404002</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>404002</td></tr><tr><td>Vendor</td><td>Müller Licht</td></tr><tr><td>Description</td><td>Tint dim remote control</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/404002.jpg" alt="Müller Licht 404002"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the small reset button (at backside of the remote at the lower part of the battery lid) e.g. with a pin for about 4 seconds. The device will reset and try to join a network. The LED is switched on during the pairing process. If pairing fails it might work after repeating this procedure and lowering the distance to your Zigbee adapter.</p><p>Pairing directly to a nearby (distance ca. 5 cm) Müller Licht Tint bulb is possible by holding down the &quot;power&quot; and &quot;dim down&quot; buttons until the LED starts blinking.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',7),s=(0,a.Uk)("How to use device type specific configuration"),o=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_1</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),r={},l=(0,i(83744).Z)(r,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);