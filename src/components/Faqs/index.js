import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="container">
      <h1 className="heading">FAQs</h1>
      <ul>
        {faqsList.map(faq => (
          <FaqItem key={faq.id} faqDetails={faq} />
        ))}
      </ul>
    </div>
  )
}
export default Faqs
