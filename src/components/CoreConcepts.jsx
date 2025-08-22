import {CORE_CONCEPTS} from '../data.js';
import CoreComponent from './CoreConcept.jsx';


export default function CoreConcepts(){
    return(
 <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>
            <CoreComponent key={conceptItem.title} {...conceptItem}
            />)}
            {/* <CoreComponent
            title = {CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image ={CORE_CONCEPTS[0].image}
            />
            <CoreComponent
            {...CORE_CONCEPTS[1]}
            />
            <CoreComponent
            {...CORE_CONCEPTS[2]}
            />
            <CoreComponent
            title = {CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image ={CORE_CONCEPTS[3].image}
            /> */}
            
          </ul>
        </section>
    );
}