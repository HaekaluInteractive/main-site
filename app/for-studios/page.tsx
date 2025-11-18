import ServicesGrid from '../../components/studios/ServicesGrid'
import CaseStudyBlock from '../../components/studios/CaseStudyBlock'
import SubmissionProcess from '../../components/studios/SubmissionProcess'
import SubmissionForm from '../../components/studios/SubmissionForm'

export default function ForStudios(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold">For Game Studios</h1>
      <p className="text-lg text-gray-300">We publish indie studios with world-class music and press access.</p>
      <ServicesGrid />
      <CaseStudyBlock />
      <SubmissionProcess />
      <SubmissionForm />
    </section>
  )
}
