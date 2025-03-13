export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in our workshops?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our upcoming workshops and courses to enhance your skills and knowledge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-all">
              View Upcoming Workshops
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

