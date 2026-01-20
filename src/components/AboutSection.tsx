const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              About TriConnect
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              TriConnect helps students, teachers, and parents stay aligned with assignments, communication, and progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Mission */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
                Mission
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                To bridge the communication gap between home and the classroom, empowering learners, educators, and guardians with a collaborative digital platform.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-4 sm:mb-6">
                Vision
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                A connected education ecosystem where progress, feedback, and engagement flow seamlessly between students, teachers, and parents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;