// imports all necessary data from other directories
import projectData from '../utils/data';
import trivl from '../assets/trivl.jpg';
import activ from '../assets/activ.jpg';
import weatherApp from '../assets/weatherApp.jpg';
import projectTracker from '../assets/projectTracker.jpg';
import jate from '../assets/jate.jpg';
import noteTaker from '../assets/noteTaker.jpg';

import Project from '../components/Project'

// assigns an imgSrc attribute to each element in the array which is a path to the image assets
projectData[0].imgSrc =  trivl;
projectData[1].imgSrc =  activ;
projectData[2].imgSrc =  weatherApp;
projectData[3].imgSrc =  projectTracker;
projectData[4].imgSrc =  jate;
projectData[5].imgSrc =  noteTaker;


export default function Portfolio() {
    return (
        // maps through all of projectData and creates a new array of Project components
        // with the data from the original array available as a prop
        <div>
        {projectData.map((project) => <Project key={project.id} data={project}/>)}
        </div>
    );
}