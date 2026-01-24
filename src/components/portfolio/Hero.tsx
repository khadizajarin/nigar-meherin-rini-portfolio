import { Mail, Phone, Linkedin, Facebook } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-primary-foreground" />
        <div className="absolute top-40 right-40 w-96 h-96 rounded-full border border-primary-foreground" />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-8 animate-slide-up order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-burgundy-light font-body text-lg tracking-widest uppercase">
                Journalist & TV Reporter
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Nigar Meherin
                <span className="block text-gold-light">Rini</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg font-body leading-relaxed">
              Motivated and detail-oriented journalist with a passion for storytelling, 
              multimedia reporting, and uncovering impactful narratives that matter.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:meherinrini137@gmail.com"
                className="flex items-center gap-2 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                <Mail className="w-5 h-5" />
                <span className="font-body text-sm">Email Me</span>
              </a>
              <a
                href="tel:+8801786506137"
                className="flex items-center gap-2 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                <Phone className="w-5 h-5" />
                <span className="font-body text-sm">Call Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nigar-meherin-rini-7826ab244"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-body text-sm">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/share/17dAC7zN5M/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/20"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-body text-sm">Facebook</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-gold-light/30 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary-foreground/10" />
              
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-primary-foreground/20">
                <img
                  src={profilePhoto}
                  alt="Nigar Meherin Rini"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-current rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
