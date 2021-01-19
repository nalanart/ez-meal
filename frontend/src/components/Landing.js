import './Landing.css'
import HowItWorksSingle from './HowItWorksSingle'

export default function Landing() {
  return (
    <div className="Landing">
      <section className="Landing-banner">
        <h1 className="banner-title"><b>Montreal's most popular and trusted meal delivery kit!</b></h1>
        <h5 className="banner-description">Get fresh ingredients and easy-to-follow instructions to start cooking delicious meals yourself.</h5>
        <a href="/register" className="btn btn-try-now"><h5><b>Try It Now</b></h5></a>
      </section>
      <h2 className="section-title"><b>HOW IT WORKS:</b></h2>
      <div className="how-it-works-singles">
        <HowItWorksSingle imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_2.jpg"
                          title="1. Select your meals."
                          description="Choose up to four delicious meals per week from our vast and unique menu. Note any of your dietary preferences and we will accomodate." />
        <HowItWorksSingle imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_3.jpg"
                          title="2. Preparation and packaging."
                          description="We shop for you and prepare all the necessary ingredients and package them in our temperature-controlled boxes." />
        <HowItWorksSingle imageSource="https://cdn.makegoodfood.ca/images/home/how-it-works/Goodfood_home_how_it_works_visual_3.jpg"
                          title="3. We deliver weekly - for free."
                          description="We deliver everything right to your doorstep along with the instructions for you to easily follow." />
      </div>
    </div>
  )
}