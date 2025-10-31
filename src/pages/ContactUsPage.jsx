import { useState } from "react"
import { Link } from "react-router-dom"
import { Gamepad2, Mail, MessageSquare, Twitter, HelpCircle, Send, AlertCircle } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Di sini Anda akan mengirim data ke backend
    console.log("Form Data Submitted:", formData)
    
    // Simulasi pengiriman berhasil
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main className="min-h-screen app-background">
      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-copy-primary">Contact Us</h1>
          <p className="mt-4 text-xl text-copy-secondary">
            Have a question, feedback, or a great idea? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card/50 rounded-xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-copy-primary mb-6">Send us a message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-green-500" />
                  <p className="text-green-400">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-copy-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-background/70 border border-border py-3 px-4 text-copy-primary placeholder-copy-secondary/50 focus:outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-copy-secondary mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-background/70 border border-border py-3 px-4 text-copy-primary placeholder-copy-secondary/50 focus:outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-copy-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-background/70 border border-border py-3 px-4 text-copy-primary placeholder-copy-secondary/50 focus:outline-none focus:border-cta focus:ring-2 focus:ring-cta/20"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-copy-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg bg-background/70 border border-border py-3 px-4 text-copy-primary placeholder-copy-secondary/50 focus:outline-none focus:border-cta focus:ring-2 focus:ring-cta/20 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-cta px-6 py-3 font-semibold text-cta-text transition-colors hover:bg-cta-active"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card/50 rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold text-copy-primary mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cta mt-0.5" />
                  <div>
                    <p className="text-copy-primary font-medium">Email</p>
                    <p className="text-copy-secondary">support@gamedb.io</p>
                    <p className="text-copy-secondary/75 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-copy-primary font-medium">Community Forum</p>
                    <Link to="/community" className="text-blue-400 hover:text-blue-300">
                      Join the discussion
                    </Link>
                    <p className="text-slate-500 text-sm mt-1">Get help from other gamers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Twitter className="h-5 w-5 text-sky-500 mt-0.5" />
                  <div>
                    <p className="text-copy-primary font-medium">Social Media</p>
                    <a href="https://twitter.com/gamedb" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      @GameDB
                    </a>
                    <p className="text-slate-500 text-sm mt-1">For updates and news</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold text-copy-primary mb-4">Frequently Asked Questions</h3>
              <p className="text-copy-secondary mb-4">
                Find quick answers to common questions about GameDB.
              </p>
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 font-medium text-copy-primary transition-colors hover:bg-card"
              >
                <HelpCircle className="h-4 w-4" />
                View FAQ
              </Link>
            </div>

            <div className="app-background app-card  rounded-xl p-6">
              <h3 className="text-xl font-semibold text-copy-primary mb-2">Need Immediate Help?</h3>
              <p className="text-copy-secondary mb-4">
                Check out our comprehensive help center for guides and tutorials.
              </p>
              <Link
                to="/help"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-blue-600 px-4 py-2 font-medium transition-colors hover:bg-blue-50"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}