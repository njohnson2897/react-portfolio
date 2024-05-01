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
        <a className='text-decoration-none text-white btn btn-secondary fs-5  my-5' href='https://drive.google.com/file/d/1dJE2YxqRvRQPsqTx78m6-V06oWypmXCF/view?usp=drive_link'>Non-technical Resume</a>
        <a className='text-decoration-none text- btn btn-secondary fs-5 my-5' href='https://drive.google.com/file/d/1NOaOyA8J35XGK0XgF52a0won_42EEO_b/view?usp=drive_link'>Technical Resume</a>
        </div>
      </div>
        </div>
    )
}