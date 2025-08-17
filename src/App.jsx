import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/header.jsx';
import CoreComponent from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

 

  return (
    <div> 
      <Header/>    
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreComponent
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
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect ={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect ={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect ={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect ={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
