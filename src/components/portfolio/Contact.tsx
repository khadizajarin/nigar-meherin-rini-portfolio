import { Mail, Phone, MapPin, Linkedin, Facebook, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-light font-body text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's Work <span className="text-gold-light">Together</span>
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:meherinrini137@gmail.com"
                className="flex items-center gap-4 p-5 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl hover:bg-primary-foreground/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Email</p>
                  <p className="font-medium">meherinrini137@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+8801786506137"
                className="flex items-center gap-4 p-5 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl hover:bg-primary-foreground/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Phone</p>
                  <p className="font-medium">+880 1786 506137</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Location</p>
                  <p className="font-medium">Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">Connect With Me</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Follow my journey and stay updated with my latest work and stories
                </p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/nigar-meherin-rini-7826ab244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/17dAC7zN5M/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:meherinrini137@gmail.com"
                    className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-all duration-300 hover:scale-110"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gold/20 rounded-2xl p-6 text-center">
                <p className="text-gold-light font-display text-lg">
                  "Every story deserves to be told with passion and purpose."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 font-body">
            © 2025 Nigar Meherin Rini. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
