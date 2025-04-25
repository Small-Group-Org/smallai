
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this data to your backend or Notion API
      console.log("Form data submitted:", formData);
      
      // Show success message
      toast({
        title: "Form submitted successfully!",
        description: "We'll redirect you to our calendar to schedule your call.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        businessType: "",
        website: "",
        message: "",
      });
      
      // Redirect to Cal.com after a short delay
      setTimeout(() => {
        window.open("https://cal.com/prakarshgupta", "_blank");
      }, 1500);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-brand-dark to-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Discovery Call</h2>
          <p className="text-lg text-gray-300">
            Ready to see what AI automation can do for your business? Fill out the form below
            and we'll schedule a personalized discovery call.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-200 mb-1">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                >
                  <option value="" disabled>Select your business type</option>
                  <option value="agency">Agency</option>
                  <option value="saas">SaaS Company</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-200 mb-1">
                  Business Website (optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                  placeholder="https://example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                What would you like to discuss?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple text-white"
                placeholder="Tell us about your business challenges and automation needs..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Schedule Your Discovery Call"
                )}
              </button>
              <p className="text-center text-sm text-gray-400 mt-4">
                You'll be redirected to our calendar to select a convenient time.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
