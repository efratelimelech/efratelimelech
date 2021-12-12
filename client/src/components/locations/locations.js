import React from "react";
import {MyMapComponent} from './googleMaps'
import './locations.css'
export default function Location(){
    return(
     <>  
    <div>Location</div>
     {/* <MyMapComponent></MyMapComponent>  */}
   
<div>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" placeholder="תאריך"  />
<datalist id="ice-cream-flavors">
    <option value="Chocolate"/>
    <option value="Coconut"/>
    <option value="Mint"/>
    <option value="Strawberry"/>
    <option value="Vanilla"/>
</datalist>
</div>
<div>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" placeholder="בחר גודל"/>
<datalist id="ice-cream-flavors">
    <option value="Chocolate"/>
    <option value="Coconut"/>
    <option value="Mint"/>
    <option value="Strawberry"/>
    <option value="Vanilla"/>
</datalist>
</div>

<div>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" placeholder="חפש רחוב" />
<datalist id="ice-cream-flavors">
    <option value="Chocolate"/>
    <option value="Coconut"/>
    <option value="Mint"/>
    <option value="Strawberry"/>
    <option value="Vanilla"/>
</datalist>
</div>
    </>
    )}
  
    
    
    