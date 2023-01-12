import './how-it-works.css'

const HowItWorks = ({ icon, heading, description }) => {
  return (
    <div className="info--section">
      <div className="icon">
        <img src={`./imgs/svgs/${icon}.svg`} alt={`${icon} logo`} />
      </div>
      <div className="info">
        <p className='info--heading'>{heading}</p>
        <p className='info--description'>{description}</p>
      </div>
    </div> 
  )
}

export default HowItWorks