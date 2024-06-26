export default function Resume() {
    return (
        <div>
             <h3 className='text-center'>Proficiencies:</h3>
        <div className="row my-5 text-center">
        <div className="col-md-4">
          <h3>Front-End</h3>
          <ul className='list-unstyled'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Back-End</h3>
          <ul className='list-unstyled'>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Libraries/Frameworks</h3>
          <ul className='list-unstyled'>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className='d-flex text-center justify-content-evenly'>
            {/* links to my techncial and non-technical resumes */}
        <a className='text-decoration-none text-white btn btn-secondary fs-5  my-5' href='https://drive.google.com/file/d/1-bbjV4NMj0Ga4I0AIsCutxbRjOz-Hrfd/view?usp=sharing'>Non-technical Resume</a>
        <a className='text-decoration-none text-white btn btn-secondary fs-5 my-5' href='https://drive.google.com/file/d/11Li4uta8q7w0U2k_eai_De2MsE-zt07-/view?usp=sharing'>Technical Resume</a>
        </div>
      </div>
        </div>
    )
}