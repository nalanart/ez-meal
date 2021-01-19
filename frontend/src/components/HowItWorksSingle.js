import './HowItWorksSingle.css'

export default function HowItWorksSingle({ imageSource, title, description }) {
  return (
    <div className="HowItWorksSingle">
      <img src={imageSource} width="400" />
      <b>{title}</b>
      <p>{description}</p>
    </div>
  )
}