interface VoiceOptimizedContentProps {
  title: string
  description: string
  faqs: Array<{
    question: string
    answer: string
  }>
  cityName: string
  competitorName: string
}

export function VoiceOptimizedContent({
  title,
  description,
  faqs,
  cityName,
  competitorName,
}: VoiceOptimizedContentProps) {
  return (
    <div className="voice-optimized-content my-12 max-w-4xl mx-auto px-4">
      <h2 className="voice-search-heading text-3xl font-bold mb-4">{title}</h2>
      <p className="voice-search-paragraph text-lg mb-8">{description}</p>

      <div className="voice-search-faqs space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="voice-search-faq-question text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="voice-search-faq-answer mb-4">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
